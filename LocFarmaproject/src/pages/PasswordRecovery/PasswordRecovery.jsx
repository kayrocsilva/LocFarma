import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordRecovery = () => {
  const [resetMethod, setResetMethod] = useState('');
  const [formValues, setFormValues] = useState({
    email: '',
    phone: ''
  });

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
        alert('Link de recuperação de senha enviado para o e-mail.');
      } else if (resetMethod === 'phone') {
        // Logica de recuperação via telefone
        // Esta função não existe diretamente no Firebase Auth para web.
        // A lógica para recuperação de senha via telefone precisa ser implementada no backend e depois integrada aqui.
        alert('Recuperação de senha via telefone ainda não está implementada.');
      }
    } catch (error) {
      console.error('Erro ao tentar redefinir a senha:', error);
      alert('Erro ao tentar redefinir a senha. Verifique os dados inseridos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Recuperação de Senha</h2>

      <label>Método de Recuperação:</label><br />
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

      {resetMethod === 'email' && (
        <div>
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
        <div>
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
    </form>
  )
}

export default PasswordRecovery
