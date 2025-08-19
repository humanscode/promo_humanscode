import React from 'react';
import './DNASystemSection.css';

const DNASystemSection: React.FC = () => {
  return (
    <section className="dna-section">
      <div className="container">
        <h2 className="dna-title">
          Наша власна нейромережа <span className="dna-gradient">DNA</span>
        </h2>
        <p className="dna-subtitle">
          Ми створили нейросистему нового покоління — <strong>DNA</strong>, яка адаптується, навчається та управляє бізнес-процесами.
        </p>

        <div className="dna-features-grid">
          <div className="dna-feature-card">
            <h3>Постійне навчання</h3>
            <p>DNA аналізує історію, вчиться на поведінці користувачів та оптимізує рішення самостійно.</p>
          </div>
          <div className="dna-feature-card">
            <h3>Памʼять і логіка</h3>
            <p>DNA має логічний модуль і власну памʼять — вона не просто відповідає, а мислить.</p>
          </div>
          <div className="dna-feature-card">
            <h3>Основа Humanscode-платформ</h3>
            <p>Усі ERP/CRM, з зручним інтерфейсом, адмін-панелі сайтів, аналітика та комунікація побудовані на DNA — як мозок усієї системи.</p>
          </div>
        </div>

        <div className="dna-button-container">
          <a href="/presentation.pdf" className="dna-button" target="_blank" rel="noopener noreferrer">
            Дивитись презентацію
          </a>
        </div>
          <div className="dna-button-container">
          <a href="https://dna.humanscode.tech" className="dna-button" target="_blank" rel="noopener noreferrer">
            Дивитись демоверсію
          </a>
        </div>
      </div>
    </section>у
  );
};

export default DNASystemSection;
