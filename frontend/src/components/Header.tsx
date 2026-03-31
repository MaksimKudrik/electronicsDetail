// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <NavLink to="/" className="logo">
          <div className="logo-icon">
            <span>M</span>
          </div>
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

        {/* Правая часть: тема + гамбургер */}
        <div className="header-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Переключить тему"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <button 
            onClick={toggleMenu} 
            className="hamburger"
            aria-label="Открыть меню"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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