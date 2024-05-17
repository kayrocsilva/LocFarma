import React, { useEffect } from 'react'
import styles from '../Login/Login.module.css'
import { useState } from 'react'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {login, error: authError, loading } = userAuthentication()
  const navigate = useNavigate()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const user = {
        email,
        password
    }
    const res = await login(user)

    console.table(res)
    navigate("/login/showusername")
  }

  useEffect(() => {
    if (authError) {
        setError(authError)
    }
  }, [authError]);

  const handleRegisterClick = () => {
    navigate('/register')
  }

  const handleRecoverPasswordClick = () => {
    navigate('/recover-password')
  }
  return (
    <div className={styles.login}>
        <h1>LocFarma</h1>
        <form onSubmit={handlerSubmit}>
        <label>
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entre com seu e-mail"></input>
        </label>
        <label>
            <span>Senha: </span>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entre com sua senha"></input>
        </label>
        {!loading && <button className="btn">Login</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
    </form>
    {!loading && <button className="btn" onClick={handleRegisterClick}>Registrar</button>}
    {!loading && <button className="btn" onClick={handleRecoverPasswordClick}>Recuperar Senha</button>}
    </div>
  )
}

export default Login