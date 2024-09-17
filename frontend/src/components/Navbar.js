import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <nav className="navbar">

        <a href="https://web.whatsapp.com/" className="logo">
            <img src="" alt="Logo" className="logo-image" />
        </a>

        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#artistas">Artistas</a></li>
          <li><a href="#obras">Obras</a></li>
          <li><a href="#comprar">Comprar</a></li>
          <li><a href="#vender">Vender</a></li>
        </ul>

        <div className="navbar-buttons">
          <Link to="/register">
          <button className="signup-button">Registrase</button>
          </Link>
          <Link to="/login">
          <button className="login-button">Iniciar Sesión</button>
          </Link>
        </div>

        </nav>

    </header>
  )
}

export default Navbar