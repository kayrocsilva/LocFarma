import React, { useState } from 'react'

const Register = () => {
  const [documentType, setDocumentType] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    address: '',
    cep: '',
    email: '',
    cpf: '',
    companyName: '',
    cnpj: '',
    phone: ''
  });

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form values:', formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tipo de Documento:</label><br />
      <input
        type="radio"
        id="cpf_option"
        name="document_type"
        value="cpf"
        checked={documentType === 'cpf'}
        onChange={handleDocumentTypeChange}
        required
      />
      <label htmlFor="cpf_option">CPF</label><br />
      <input
        type="radio"
        id="cnpj_option"
        name="document_type"
        value="cnpj"
        checked={documentType === 'cnpj'}
        onChange={handleDocumentTypeChange}
        required
      />
      <label htmlFor="cnpj_option">CNPJ</label><br /><br />

      {documentType === 'cpf' && (
        <div>
          <label htmlFor="name">Nome:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          /><br /><br />
          
          <label htmlFor="surname">Sobrenome:</label><br />
          <input
            type="text"
            id="surname"
            name="surname"
            value={formValues.surname}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="address">Endereço:</label><br />
          <input
            type="text"
            id="address"
            name="address"
            value={formValues.address}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="cep">CEP:</label><br />
          <input
            type="text"
            id="cep"
            name="cep"
            value={formValues.cep}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="phone">Celular:</label><br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="cpf">CPF:</label><br />
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formValues.cpf}
            onChange={handleChange}
            required
          /><br /><br />
        </div>
      )}

      {documentType === 'cnpj' && (
        <div>
          <label htmlFor="companyName">Razão Social:</label><br />
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formValues.companyName}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="address">Endereço:</label><br />
          <input
            type="text"
            id="address"
            name="address"
            value={formValues.address}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="cep">CEP:</label><br />
          <input
            type="text"
            id="cep"
            name="cep"
            value={formValues.cep}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="phone">Celular:</label><br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="cnpj">CNPJ:</label><br />
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formValues.cnpj}
            onChange={handleChange}
            required
          /><br /><br />
        </div>
      )}

      <input type="submit" value="Registrar" />
    </form>
  )
}

export default Register
