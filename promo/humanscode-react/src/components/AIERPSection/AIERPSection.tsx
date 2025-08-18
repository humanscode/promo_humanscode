import React from 'react';
import './AIERPSection.css';

const AIERPSection: React.FC = () => {
  return (
    <section className="erp-section">
      <div className="container">
        <h2 className="erp-title">AI-ERP/CRM системи<br /><span className="gradient-text">під ключ для вашого бізнесу</span></h2>
        <p className="erp-subtitle">
          Ми розробляємо інтелектуальні CRM та ERP системи на основі власної нейромережі, які інтегруються у ваші процеси, скорочують витрати та масштабують бізнес.
        </p>

        <div className="erp-features">
          <div className="erp-feature">
            <h3> Автоматизація процесів</h3>
            <p>Система бере на себе рутину: облік, звітність, нагадування, документообіг, первинний прийом заявок</p>
          </div>
          <div className="erp-feature">
            <h3> AI-аналітика в реальному часі</h3>
            <p>Нейросеть аналізує роботу співробітників, клієнтів, угод і дає рекомендації, формує кп, обробляє пошту і тд.</p>
          </div>
          <div className="erp-feature">
            <h3> Масштабування бізнесу</h3>
            <p>Гнучка архітектура дозволяє швидко адаптувати систему під будь-який етап росту бізнесу.</p>
          </div>
         <div className="erp-button-container">
  <a href="#contact" className="dna-button">
    Консультація по інтеграції
  </a>
</div>
          
        </div>
      </div>
    </section>
  );
};

export default AIERPSection;
