import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="about-title gradient-title">HUMANSCODE — digital-партнер вашого бізнесу</h2>
          <p className="about-description">
            Ми — команда, яка комплексно закриває потреби бізнесу в онлайн-присутності та зростанні.
            <br /><br />
            Веброзробка, UI/UX дизайн, digital-маркетинг, кібербезпека, CRM/ERP-системи та супровід — усе, щоб ваш продукт працював ефективно.
            <br /><br />
            Ми створюємо не просто сайти — ми будуємо цифрові рішення, що приносять результат. Понад 150+ проєктів для компаній з України, Європи, Канади та США з 2018 року.
          </p>
          {/* <a href="#contacts" className="about-button">Звʼязатись з нами</a> */}
        </div>

        {/* Если нужно изображение — раскомментируй: */}
        {/* <div className="about-image">
          <img src="/images/about-img.jpg" alt="Humanscode Team" />
        </div> */}
      </div>
    </section>
  );
};

export default About;
