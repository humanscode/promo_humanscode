import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  title: string;
  images: string[];
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, images, description, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <div className="modal-gallery">
          {images.map((img, index) => (
            <img src={img} key={index} alt={`${title} image ${index + 1}`} />
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
