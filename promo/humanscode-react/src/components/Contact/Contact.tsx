import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🟣 <b>Нова заявка з сайту Humanscode</b>

👤 <b>Імʼя:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📞 <b>Телефон:</b> ${formData.phone || '—'}
💬 <b>Повідомлення:</b> ${formData.message}
    `.trim();

    const TOKEN = '8291895148:AAHnxiZ70BiMasYliwQgdBpfSZ5phJPxaNY';
    const CHAT_ID = -4878601579;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.description || 'Не вдалося надіслати повідомлення');
      }

      setFormData({ name: '', email: '', phone: '', message: '' });

      // ✅ Переход только после успешной отправки
      navigate('/pages/ThankYou');
    } catch (error: any) {
      console.error('Помилка при надсиланні:', error);
      alert(`Помилка: ${error.message || 'Спробуйте пізніше.'}`);
    }
  };

  return (
    <section className="contact" id="contacts">
      <div className="container">
        <h2 className="contact-title">Давайте зробимо щось круте разом</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Імʼя"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Повідомлення"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact-button">Надіслати заявку</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
