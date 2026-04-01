// src/components/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <NavLink to="/" className="logo">
          <div className="logo-icon">M</div>
          <span className="logo-text">MyApp</span>
        </NavLink>

        {/* Десктопное меню */}
        <nav className="nav-links">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Главная</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>О нас</NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>Услуги</NavLink>
          <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Проекты</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Контакты</NavLink>
        </nav>

        {/* Гамбургер — только для мобильных */}
        <button 
          onClick={toggleMenu} 
          className="hamburger"
          aria-label="Открыть меню"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <NavLink to="/" className="mobile-link" onClick={closeMenu}>Главная</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={closeMenu}>О нас</NavLink>
          <NavLink to="/services" className="mobile-link" onClick={closeMenu}>Услуги</NavLink>
          <NavLink to="/projects" className="mobile-link" onClick={closeMenu}>Проекты</NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={closeMenu}>Контакты</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;