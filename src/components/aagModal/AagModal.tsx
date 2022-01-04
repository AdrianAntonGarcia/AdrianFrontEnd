import './aagModal.scss';
import { AagButton } from '..';
import { useState } from 'react';

interface Props {
  onSuccess?: () => any;
}
export const AagModal = ({ onSuccess }: Props) => {
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
            <span className="modal-text ">
              Laboris fugiat incididunt elit culpa cupidatat. Anim proident sunt
              fugiat consectetur ex. Non quis deserunt in ut ullamco occaecat
              aliqua pariatur dolore consectetur elit cillum. Veniam laborum
              laboris reprehenderit eu. Nostrud sunt eu velit commodo
              reprehenderit qui irure eu ea amet sint magna veniam.
            </span>
            <div className="modal-buttons">
              <AagButton
                label="Confirmar"
                buttonType="success"
                onClick={() => {
                  !!onSuccess && onSuccess();
                  cancelModal();
                }}
              />
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
