import React, { useState } from 'react';
import './Projects.css';
import projectImg1 from '../../assets/projects/it-1.png';
import projectImg2 from '../../assets/projects/it-2.png';
import projectImg2_1 from '../../assets/projects/it-2-1.png';
import projectImg2_0 from '../../assets/projects/it-2_0.png';


import projectImg2_3 from '../../assets/projects/it-2-3.png';
import projectImg2_4 from '../../assets/projects/it-2-4.png';
import projectImg2_5 from '../../assets/projects/it-2-5.png';
import projectImg2_6 from '../../assets/projects/it-2-6.png';
import projectImg2_7 from '../../assets/projects/it-2-7.png';
import projectImg3_1 from '../../assets/projects/it-3.png';
import projectImg3_2 from '../../assets/projects/it-3_1.png';
import projectImg4 from '../../assets/projects/it-4.png';
import projectImg4_1 from '../../assets/projects/it-4_1.png';
// import projectImg4_2 from '../../assets/projects/it-4_2.png';
import projectImg4_3 from '../../assets/projects/it-4_4.png';
import projectImg4_4 from '../../assets/projects/it-4_4.png';
import projectImg4_5 from '../../assets/projects/it-4_5.png';
import projectImg5_0 from '../../assets/projects/it-5_0.png';
import projectImg5_1 from '../../assets/projects/it-5_1.png';
import projectImg5_2 from '../../assets/projects/it-5_2.png';
import projectImg5_3 from '../../assets/projects/it-5_3.png';
import projectImg5_4 from '../../assets/projects/it-5_4.png';



interface Project {
  title: string;
  thumbnail: string;
  gallery: string[];
  period: string;
  typeOfWork: string;
  description: string;
  result: string;
}

const projects: Project[] = [
  {
    title: 'Ukrainian state-own Company',
    thumbnail: projectImg1,
    gallery: [
      projectImg1,
     
    ],
    period: 'Січень 2021 — Березень 2024',
    typeOfWork: 'Розробка сайту, UI/UX дизайн, SEO, кібербезпека',
    description: 'Наша команда розробила сайт для державної компанії з акцентом на безпеку та зручність використання. Враховучючи всі вимоги державних стандартів, ми створили інтуїтивно зрозумілий інтерфейс та забезпечили високий рівень кібербезпеки, незважаючи на складність проекту та мастабні кібер-атаки.',
    result: 'Чотири роки успішної роботи сайту, що відповідає всім державним стандартам. Ми забезпечили високий рівень кібербезпеки, незважаючи на складність проекту та масштабні кібер-атаки.',
  },
  {
    title: 'КНУ ім. Т.Г.Шевченко',
    thumbnail: projectImg4,
    gallery: [

    projectImg4_1,
   projectImg4_5,
    projectImg4_3,
   projectImg4_4,
  
    
    ],
    period: 'Вересень 2024 р. ',
    typeOfWork: 'UI/UX дизайн',
    description: 'Ми розробили новий дизайн для сайту КНУ ім. Т.Г. Шевченка, зосередившись на покращенні користувацького досвіду та адаптивності для різних пристроїв.',
    result: 'Завершено розробку нового дизайну, який відповідає сучасним вимогам UX/UI та забезпечує зручність використання для студентів та викладачів.',
  },
  {
    title: 'Hideaway',
    thumbnail: projectImg2_0,
    gallery: [
     projectImg2,
     projectImg2_1,
     projectImg2_3,
     projectImg2_4,
     projectImg2_5,
     projectImg2_6,
     projectImg2_7,
    
    ],
    period: 'Травень 2021 — робота триває',
    typeOfWork: 'Розробка сайту, UI/UX дизайн, SEO, Google Ads',
    description: 'Ми створили сайт на React/TypeScript для психологічного центру Hideaway з фокусом на залучення клієнтів та продаж курсів з психології.',
    result: 'Зроблений сайт, 4 роки вже ведемо рекламні кампанії в Google Ads, щоденно залучаючи нових клієнтів та покращення позицій у Google.',
  },
  {
    title: 'Personal Landing-page',
    thumbnail: projectImg3_1,
    gallery: [
      projectImg3_1,
      projectImg3_2,
    
    ],
    period: 'Лютий 2024 — Березень 2024',
    typeOfWork: 'Розробка сайту, UI/UX дизайн, SEO',
    description: 'Ми створили персональну лендінг-сторінку для психолога з фокусом на залучення клієнтів та подачу портфоліо.',
    result: 'Завершено розробку сайту, який відповідає сучасним вимогам UX/UI та забезпечує зручність використання для клієнтів.',
  },
  {
    title: 'Landing для Elan Cosmetics',
    thumbnail: projectImg5_0,
    gallery: [
      projectImg5_0,
    projectImg5_1,
      projectImg5_2,
      projectImg5_3,
      projectImg5_4,
    
    ],
    period: 'Січень 2021 — Лютий 2021',
    typeOfWork: 'Розробка сайту, UI/UX дизайн.',
    description: 'Зробили лендінг для компанії Elan Cosmetics, що спеціалізується на продажу косметичних засобів. Сайт розроблено на React/TypeScript з акцентом на зручність користування та естетику.',
    result: 'Завершено розробку лендінгу, який відповідає сучасним вимогам UX/UI та забезпечує зручність використання для клієнтів. Сайт успішно працює та приносить прибуток компанії.',
  },
  // Додайте інші проєкти за аналогією
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects-title gradient-title">Наші проєкти</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => {
                setActiveProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <img src={project.thumbnail} alt={project.title} className="project-thumb" />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>
              ×
            </button>

            <div className="modal-gallery">
              <img
                src={activeProject.gallery[currentImageIndex]}
                alt={`Project ${activeProject.title}`}
                className="modal-image"
              />
              <div className="modal-gallery-nav">
                {activeProject.gallery.map((_, i) => (
                  <button
                    key={i}
                    className={i === currentImageIndex ? 'active' : ''}
                    onClick={() => setCurrentImageIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div className="modal-content">
              <h3>{activeProject.title}</h3>
              <p><strong>Період:</strong> {activeProject.period}</p>
              <p><strong>Вид робіт:</strong> {activeProject.typeOfWork}</p>
              <p><strong>Опис:</strong> {activeProject.description}</p>
              <p><strong>Результат:</strong> {activeProject.result}</p>
            
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
