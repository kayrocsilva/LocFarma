import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

const RecoveryPassword = () => {
  const [resetMethod, setResetMethod] = useState('');
  const [formValues, setFormValues] = useState({
    email: '',
    phone: ''
  });
  const [feedback, setFeedback] = useState('');

  const handleResetMethodChange = (e) => {
    setResetMethod(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (resetMethod === 'email') {
        await sendPasswordResetEmail(auth, formValues.email);
        setFeedback('Link de recuperação de senha enviado para o e-mail.');
      } else if (resetMethod === 'phone') {
        // Lógica de recuperação via telefone
        // Implemente a lógica de recuperação de senha via telefone aqui
        setFeedback('Recuperação de senha via telefone ainda não está implementada.');
      }
    } catch (error) {
      console.error('Erro ao tentar redefinir a senha:', error);
      setFeedback('Erro ao tentar redefinir a senha. Verifique os dados inseridos.');
    }
  };

  return (
    <form className="password-recovery-form" onSubmit={handleSubmit}>
      <h2>Recuperação de Senha</h2>

      <div className="reset-method">
        <label>
          Método de Recuperação:
        </label><br />
        <input
          type="radio"
          id="email_option"
          name="reset_method"
          value="email"
          checked={resetMethod === 'email'}
          onChange={handleResetMethodChange}
          required
        />
        <label htmlFor="email_option">E-mail</label><br />
        <input
          type="radio"
          id="phone_option"
          name="reset_method"
          value="phone"
          checked={resetMethod === 'phone'}
          onChange={handleResetMethodChange}
          required
        />
        <label htmlFor="phone_option">Telefone</label><br /><br />
      </div>

      {resetMethod === 'email' && (
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
      )}

      {resetMethod === 'phone' && (
        <div className="phone-field">
          <label htmlFor="phone">Telefone:</label><br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          /><br /><br />
        </div>
      )}

      <input type="submit" value="Redefinir Senha" />

      {feedback && <div className="feedback">{feedback}</div>}
    </form>
  );
};

export default RecoveryPassword;
