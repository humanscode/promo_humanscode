import React from 'react';
import './ ThankYou.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ThankYou: React.FC = () => {
  return (
    <>
      <Header />
      <section className="thank-you-section">
        <div className="thank-you-container">
          <h1 className="thank-you-title">Дякуємо за заявку!</h1>
          <p className="thank-you-text">
            Ми вже отримали ваше повідомлення і звʼяжемося з вами найближчим часом.
          </p>
          <a href="/" className="thank-you-button">Повернутися на головну</a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ThankYou;
