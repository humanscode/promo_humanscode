import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo-3.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Закрываем меню после клика
  };

  return (
    <header className="hc-header">
      <div className="header-container">
        <img src={logo} alt="Humanscode logo" className="hc-logo" />

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>

        <nav className={`hc-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={handleLinkClick}>Послуги</a>
          <a href="#projects" onClick={handleLinkClick}>Кейси</a>
          {/* <a href="#reviews" onClick={handleLinkClick}>Відгуки</a> */}
          <a href="#contacts" onClick={handleLinkClick}>Контакти</a>
        </nav>

        <button className={`hc-button ${menuOpen ? 'hidden-on-mobile' : ''}`}>
          Обговорити проєкт
        </button>
      </div>
    </header>
  );
};

export default Header;
