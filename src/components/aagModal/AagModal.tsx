import './aagModal.scss';
import { AagButton } from '..';
import { useState } from 'react';

export const AagModal = () => {
  const [showModal, setShowModal] = useState(true);

  const cancelModal = () => {
    setShowModal(false);
  };
  if (!showModal) return null;
  return (
    <div className="modal-container">
      <div className="modal-aag">
        <div className="modal-content-aag">
          <div className="modal-content-container">
            <span>Texto del modal</span>
            <div className="modal-buttons">
              <AagButton label="Confirmar" buttonType="success" />
              <AagButton
                label="Cancelar"
                buttonType="danger"
                onClick={cancelModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
