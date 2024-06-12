import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { userAuthentication } from '../../hooks/userAuthentication';
import { useAuthValue } from '../../context/AuthContext';
import styles from '../NavBar/Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar'; 
import logoDesktop from '../../assets/logotipo.png';
import logoMobile from '../../assets/logo-mobile.png';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = userAuthentication();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        <img src={logoDesktop} alt="Logo Desktop" className={styles.logoDesktop} />
        <img src={logoMobile} alt="Logo Mobile" className={styles.logoMobile} />
      </NavLink>
      <NavLink to='/'>
        <SearchBar />          
      </NavLink>
      <button className={styles.hamburger} onClick={handleMenuToggle}>
        &#9776;
      </button>
      <ul className={`${styles.links_list} ${menuOpen ? styles.show : ''}`}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : null)}>Sobre Nós</NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : null)}>Contato</NavLink>
        </li>
        {!user && (
          <li>
            <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : null)}>Entrar</NavLink>
          </li>
        )}
        {user && (
          <>
            <li>
              <NavLink to='/chat' className={({ isActive }) => (isActive ? styles.active : null)}>Chat</NavLink>
            </li>
            <li>
              <NavLink to='/perfil' className={({ isActive }) => (isActive ? styles.active : null)}>Perfil</NavLink>
            </li>
            <li>
              <button className={styles.logout} onClick={logout}>Exit</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;