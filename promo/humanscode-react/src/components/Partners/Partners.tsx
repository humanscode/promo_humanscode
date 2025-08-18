import React from 'react';
import './Partners.css';
import partnerImg1 from '../../assets/partners/minenergo.jpg';
import partnerImg2 from '../../assets/partners/gerb3.png';
import partnerIm3 from '../../assets/partners/logo-dark-uk.png';
import partnerIm4 from '../../assets/partners/logo.jpg';
import partnerIm5 from '../../assets/partners/logovolch.svg';


const partnerLogos: string[] = [
partnerImg1,
 partnerImg2,
partnerIm3,
 partnerIm4,
partnerIm5,

];

const Partners: React.FC = () => {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="partners-title">Нам довіряють</h2>
        <div className="partners-grid">
          {partnerLogos.map((logo, index) => (
            <div className="partner-item" key={index}>
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
