
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <NavLink to="/" className="logo">
          <div className="logo-icon">M</div>
          <span className="logo-text">MyApp</span>
        </NavLink>

        {/* Десктопное меню */}
        <div className="nav-links">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Главная</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>О нас</NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>Услуги</NavLink>
          <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Проекты</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Контакты</NavLink>
        </div>

        {/* Правая часть */}
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Переключить тему">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button onClick={toggleMenu} className="hamburger" aria-label="Открыть меню">
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
    </nav>
  );
};

export default Navbar;