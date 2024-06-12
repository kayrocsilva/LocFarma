import { useState, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { userAuthentication } from './hooks/userAuthentication'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import Navbar from '../src/components/NavBar/Navbar'
import loading from '././assets/images/Loading.gif'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Register from './pages/Register/Register'
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery'
import Contact from './pages/Contact/Contact'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ChatRoom from './components/Chat/ChatRoom'



function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <div className='container load'><img src={loading} alt="Gif Loading User" width="120px" height="120px" /></div>
  }
  
  return (
    <>      
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar/>
          <div className='container'>
            <Routes>            
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login />}></Route>          
              <Route path='/about'element={<About />}></Route>
              <Route path='/contact'element={<Contact />}></Route>
              <Route path='/register' element={<Register />}></Route>  
              <Route path='/recover-password' element={<PasswordRecovery />}></Route>
              <Route path='/perfil' element={<ProfilePage />}></Route>
              <Route path='/chat' element={<ChatRoom />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App