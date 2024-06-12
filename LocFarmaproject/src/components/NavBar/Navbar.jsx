import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useAuthValue } from '../../context/AuthContext'
import logoDesktop from '../../assets/logotipo.png'
import logoMobile from '../../assets/logo-mobile.png'
import SearchBar from '../SearchBar/SearchBar'
import styles from '../NavBar/Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = userAuthentication();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to='/' className="navbar-brand">
          <img src={logoDesktop} alt="Logo Desktop" className="d-none d-lg-block" />
          <img src={logoMobile} alt="Logo Mobile" className="d-lg-none" />
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={handleMenuToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <SearchBar />
        <div className={styles.navdir}>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to='/' className="nav-link" activeClassName="active" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link" activeClassName="active">Sobre Nós</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className="nav-link" activeClassName="active">Contato</NavLink>
            </li>
            {!user && (
              <li className="nav-item">
                <NavLink to='/login' className="nav-link" activeClassName="active">Entrar</NavLink>
              </li>
            )}
            {user && (
              <>
                <li className="nav-item">
                  <NavLink to='/chat' className="nav-link" activeClassName="active">Chat</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/perfil' className="nav-link" activeClassName="active">Perfil</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={logout}>Exit</button>
                </li>
              </>
            )}
          </ul>          
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;