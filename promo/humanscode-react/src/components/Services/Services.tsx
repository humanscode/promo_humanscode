import React, { useState } from 'react';
import './Services.css';
import iconWeb from '../../assets/icons/web.png';
import iconUiux from '../../assets/icons/uiux.png';
import iconMarketing from '../../assets/icons/marketing.png';
import iconSeo from '../../assets/icons/security.png';
import iconCrm from '../../assets/icons/crm.png';
import iconSupport from '../../assets/icons/support.png';

interface Service {
  title: string;
  description: string;
  icon: string;
  details: string;
}

const services: Service[] = [
  {
    title: 'Розробка сайтів',
    description: 'Landing Page, корпоративні сайти, інтернет-магазини під ключ.',
    icon: iconWeb,
    details: `Ми створюємо сучасні, швидкі та адаптивні сайти під ключ — від ідеї до запуску. Працюємо з найпопулярнішими платформами та технологіями.

🔹 Типи сайтів:
- Landing Page — односторінкові сайти з акцентом на конверсію
- Корпоративні сайти — представництво компанії з усією необхідною інформацією
- Інтернет-магазини — з каталогом товарів, кошиком і оплатою
- Портфоліо / особистий бренд — презентація робіт, послуг або експертності
- Блоги та медіа — зручне розміщення новин і статей
- CRM-системи, внутрішні платформи — автоматизація процесів компанії

🔧 CMS / Конструктори:
- WordPress, Shopify, OpenCart
- Webflow, Tilda, Joomla, MODX

💻 Технології:
Frontend: React, Next.js / Backend: PHP (Laravel), Node.js / БД: MySQL, MongoDB
Безпека: SSL, Cloudflare / Інтеграції: CRM, Telegram, онлайн-оплати

✅ Ви отримаєте: адаптивний дизайн, SEO-оптимізацію, навчання та підтримку.`,
  },
  {
    title: 'UI/UX дизайн',
    description: 'Продуманий інтерфейс з фокусом на конверсії.',
    icon: iconUiux,
    details: `Ми створюємо інтерфейси, що приносять результат:

🔹 Прототипування — визначаємо структуру і логіку сторінок
🔹 UI-дизайн — естетика, шрифти, кольори, кнопки
🔹 UX-дослідження — аналіз поведінки користувачів
🔹 Тестування — A/B-тести, валідація рішень

Інструменти: Figma, Adobe XD, Miro, Zeplin
Результат: Макети, готові до впровадження розробниками`,
  },
  {
    title: 'Digital-маркетинг',
    description: 'Контекстна реклама, аналітика, SEO, SMM.',
    icon: iconMarketing,
    details: `Комплексна стратегія для просування вашого бізнесу онлайн:

🔹 Реклама: Google Ads, Facebook / Instagram, TikTok, LinkedIn
🔹 SEO: технічна оптимізація, контент, посилання
🔹 Аналітика: Google Analytics, Hotjar, Tag Manager
🔹 Email-маркетинг, автоворонки

Мета — продажі, впізнаваність, залучення лідів`,
  },
  {
    title: 'Кібербезпека',
    description: 'Захист сайтів, серверів та даних від кібератак.',
    icon: iconSeo,
    details: `Захищаємо вашу інфраструктуру від зломів та витоків:

🔐 Аудит безпеки сайту / сервера / CMS
🛡️ Захист від DDoS та брутфорс-атак
🔎 Моніторинг вразливостей та підозрілої активності
🧩 HTTPS, SSL, шифрування, обмеження доступу

Рішення: Cloudflare, Fail2Ban, Firewall, регулярні бекапи та оновлення
Підвищуємо рівень довіри та відповідність GDPR / PCI DSS`,
  },
  {
    title: 'Розробка CRM / ERP',
    description: 'Автоматизація внутрішніх процесів компанії.',
    icon: iconCrm,
    details: `Створюємо Аі-кастомні CRM / ERP-системи:

🔹 Управління клієнтами, замовленнями, складом
🔹 Автоматизація задач, нагадувань, календарів
🔹 Інтеграція з сайтом, email, месенджерами
🔹 Ролі, аналітика, дашборди

Технології: Custom Core, React, Laravel, PostgreSQL, Python etc.
Доступ з будь-якого пристрою, масштабованість під ваші потреби`,
  },
  {
    title: 'Підтримка бізнесу',
    description: 'Консалтинг, аудит, розвиток.',
    icon: iconSupport,
    details: `Супроводжуємо вас після запуску:

🔹 Аудит існуючих рішень
🔹 Технічна підтримка, оновлення, резервні копії
🔹 Бізнес-консалтинг та пошук нових точок росту
🔹 Аналіз воронки продажів, аналітика, KPI

Будуємо довготривале партнерство`,
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-title gradient-title">Послуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-tooltip="Натисніть, щоб дізнатися більше"
              onClick={() => setActiveService(service)}
            >
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {activeService && (
        <div className="modal-overlay" onClick={() => setActiveService(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveService(null)}>×</button>
            <h3>{activeService.title}</h3>
            <div className="modal-scroll">
              {activeService.details.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
           
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
