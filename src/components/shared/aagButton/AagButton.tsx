import { CSSProperties } from 'react';
import './aagButton.scss';

export interface Props {
  label: string;
  onClick?: () => any;
  type?: 'button' | 'reset' | 'submit';
  classNameContainer?: string;
  classNameButton?: string;
  styleContainer?: CSSProperties;
  styleButton?: CSSProperties;
  theme?: 'dark' | 'light';
  buttonType?: 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
}

export const AagButton = ({
  classNameButton,
  classNameContainer,
  label,
  onClick = () => {},
  styleButton,
  styleContainer,
  theme,
  type = 'button',
  buttonType,
}: Props) => {
  const darkMode = theme === 'dark';
  let buttonTypeClass = '';
  switch (buttonType) {
    case 'danger':
      buttonTypeClass = 'button-danger';
      break;
    case 'success':
      buttonTypeClass = 'button-success';
      break;
    case 'dark':
      buttonTypeClass = 'button-dark';
      break;
    case 'info':
      buttonTypeClass = 'button-info';
      break;
    case 'warning':
      buttonTypeClass = 'button-warning';
      break;
    case 'light':
      buttonTypeClass = 'button-light';
      break;
    default:
      break;
  }
  return (
    <div
      style={{ ...styleContainer }}
      className={`buttonContainer ${classNameContainer}`}
    >
      <button
        onClick={() => onClick()}
        style={{ ...styleButton }}
        type={type}
        className={
          darkMode
            ? `button dark ${classNameButton} ${buttonTypeClass}`
            : `button ${classNameButton} ${buttonTypeClass}`
        }
      >
        <span style={{ marginTop: '3px' }}>{label}</span>
      </button>
    </div>
  );
};
