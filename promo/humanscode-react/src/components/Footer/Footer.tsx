import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient">
      <div className="container">
        <h2 className="footer-title">Готові почати?</h2>
        <p className="footer-subtitle">Зв’яжіться з нами будь-яким зручним способом</p>

       <div className="footer-links">
  <a href="tel:+380665792665" className="footer-link">
   Подзвонити
  </a>
  <a
    href="https://www.instagram.com/humanscode.ua/"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link"
  >
   Instagram
  </a>
  <a
    href="https://t.me/humanscode_tech"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link"
  >
    Читай нас  в телеграм
  </a>
</div>

        <a href="#contacts" className="footer-button">Надіслати заявку</a>

        <p className="footer-copy">
          © {new Date().getFullYear()} HUMANSCODE. Всі права захищено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
