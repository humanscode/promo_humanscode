// src/components/Hero/Hero.tsx
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
    <div className="hero-inner">
      <h1 className="hero-title">МИ КРЕАТИВНА <br /> DIGITAL АГЕНЦІЯ</h1>
      <p className="hero-subtitle">
        Ми створюємо сучасні цифрові продукти, які вирішують задачі бізнесу та приносять результат.
      </p>
      <a href="#contacts" className="hero-btn">Обговорити проєкт</a>
    </div>
    {/* <div className="hero-fade" /> */}

  </section>
  
  );
}
