import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import styles from '../PasswordRecovery/PasswordRecovery.module.css'; // Importa o arquivo CSS de estilos

const RecoveryPassword = () => {
  const [formValues, setFormValues] = useState({
    email: ''
  });
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, formValues.email);
      setFeedback('Link de recuperação de senha enviado para o e-mail.');
    } catch (error) {
      console.error('Erro ao tentar redefinir a senha:', error);
      setFeedback('Erro ao tentar redefinir a senha. Verifique os dados inseridos.');
    }
  };

  return (
    <form className={styles['password-recovery-form']} onSubmit={handleSubmit}>
      <h2>Recuperação de Senha</h2>

      <div className="email-field">
        <label htmlFor="email">E-mail:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        /><br /><br />
      </div>

      <input type="submit" value="Redefinir Senha" />

      {feedback && <div className="feedback">{feedback}</div>}
    </form>
  );
};

export default RecoveryPassword;