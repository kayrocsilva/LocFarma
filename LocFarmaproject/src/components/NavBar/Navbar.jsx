import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useAuthValue } from '../../context/AuthContext'
import styles from '../NavBar/Navbar.module.css'

const Navbar = () => {
  const { user } = useAuthValue()
  const { logout } = userAuthentication()
  const navigate = useNavigate()
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
          LocFarma
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to='/'
              className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'
              className={({ isActive }) => (isActive ? styles.active : null)}>Sobre Nós</NavLink>
          </li>
          <li>
            <NavLink to='/contact'
              className={({ isActive }) => (isActive ? styles.active : null)}>Contato</NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to='/login'
                  className={({ isActive }) => (isActive ? styles.active : null)}>Entrar</NavLink>
              </li>
            </>
          )}

          
          {user && (
            <li>
              <button className={styles.logout} onClick={logout} >Exit</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  )

}

export default Navbar