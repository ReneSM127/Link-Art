import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <nav className="navbar">

        <a href="" className="logo">
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
          <button className="signup-button">Registrase</button>
          <button className="login-button">Iniciar Sesión</button>
        </div>

        </nav>

    </header>
  )
}

export default Navbar