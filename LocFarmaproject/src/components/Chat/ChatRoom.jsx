import React, { useState, useEffect } from 'react'
import { db, auth } from '../../firebase/config'
import { collection, query, where, onSnapshot, addDoc, Timestamp } from 'firebase/firestore'

const ChatRoom = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'conversations'), where('clientUserId', '==', auth.currentUser.uid)), snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setConversations(data);
    });
    return unsubscribe;
  }, []);

  const startConversation = async (pharmacyId) => {
    try {
      const docRef = await addDoc(collection(db, 'conversations'), {
        clientUserId: auth.currentUser.uid,
        pharmacyUserId: pharmacyId
      });
      setSelectedPharmacy(null);
      console.log("Conversation started with ID: ", docRef.id);
    } catch (error) {
      console.error("Error starting conversation: ", error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedPharmacy) return;
    try {
      const conversation = conversations.find(conv => conv.pharmacyUserId === selectedPharmacy);
      if (conversation) {
        await addDoc(collection(db, `conversations/${conversation.id}/messages`), {
          sender: auth.currentUser.uid,
          message: newMessage,
          timestamp: Timestamp.now()
        });
        setNewMessage('');
        console.log("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        <h3>Conversations:</h3>
        <ul>
          {conversations.map(conv => (
            <li key={conv.id}>
              Farmácia ID: {conv.pharmacyUserId}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Start a Conversation:</h3>
        <select onChange={(e) => setSelectedPharmacy(e.target.value)}>
          <option value="">Select a pharmacy</option>
          {/* Render a list of pharmacies to select */}
        </select>
        <button onClick={() => startConversation(selectedPharmacy)}>Start Conversation</button>
      </div>
      <div>
        <h3>Send Message:</h3>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom
