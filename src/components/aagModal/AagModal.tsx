import { AagButton } from '..';
import cx from 'classnames';
import modalStyles from './aagModal.module.scss';

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
    <div className={modalStyles['modal-container']}>
      <div className={modalStyles['modal-aag']}>
        <div
          className={
            darkTheme
              ? cx(modalStyles['modal-content-aag'], modalStyles.dark)
              : cx(modalStyles['modal-content-aag'])
          }
        >
          <div className={modalStyles['modal-content-container']}>
            <span
              className={
                darkTheme
                  ? cx(modalStyles['modal-text'], modalStyles.dark)
                  : modalStyles['modal-text']
              }
            >
              {textModal}
            </span>
            {showCancelButton && showSuccessButton && (
              <div className={modalStyles['modal-buttons']}>
                {showSuccessButton && successButton}
                {showCancelButton && cancelButton}
              </div>
            )}
            {showCancelButton && !showSuccessButton && (
              <div
                className={cx(modalStyles['modal-buttons'], modalStyles.only)}
              >
                {cancelButton}
              </div>
            )}
            {!showCancelButton && showSuccessButton && (
              <div
                className={cx(modalStyles['modal-buttons'], modalStyles.only)}
              >
                {successButton}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
