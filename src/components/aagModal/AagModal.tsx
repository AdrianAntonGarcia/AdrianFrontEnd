import './aagModal.scss';
import { AagButton } from '..';

interface Props {
  onCancel?: () => any;
  onSuccess?: () => any;
  darkTheme?: boolean;
  show: boolean;
  showCancelButton?: boolean;
  showSuccessButton?: boolean;
  textCancel: string;
  textModal: string;
  textSuccess: string;
}
export const AagModal = ({
  darkTheme = false,
  onCancel,
  onSuccess,
  show = true,
  showCancelButton = true,
  showSuccessButton = true,
  textCancel,
  textModal,
  textSuccess,
}: Props) => {
  const successButton = (
    <AagButton
      label={textSuccess}
      theme={darkTheme ? 'dark' : 'light'}
      onClick={() => {
        !!onSuccess && onSuccess();
      }}
    />
  );
  const cancelButton = (
    <AagButton
      label={textCancel}
      buttonType="dark"
      onClick={() => {
        !!onCancel && onCancel();
      }}
    />
  );
  if (!show) return null;
  return (
    <div className="modal-container">
      <div className="modal-aag">
        <div
          className={darkTheme ? 'modal-content-aag dark' : 'modal-content-aag'}
        >
          <div className="modal-content-container">
            <span className={darkTheme ? 'modal-text dark' : 'modal-text'}>
              {textModal}
            </span>
            {showCancelButton && showSuccessButton && (
              <div className="modal-buttons">
                {showSuccessButton && successButton}
                {showCancelButton && cancelButton}
              </div>
            )}
            {showCancelButton && !showSuccessButton && (
              <div className="modal-buttons only">{cancelButton}</div>
            )}
            {!showCancelButton && showSuccessButton && (
              <div className="modal-buttons only">{successButton}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
