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

const buttonTypeStyles = {
  danger: 'button-danger',
  success: 'button-success',
  warning: 'button-warning',
  info: 'button-info',
  dark: 'button-dark',
  light: 'button-light',
};

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
            ? `button dark ${classNameButton} ${
                buttonType && buttonTypeStyles[buttonType]
              }`
            : `button ${classNameButton} ${
                buttonType && buttonTypeStyles[buttonType]
              }`
        }
      >
        <span>{label}</span>
      </button>
    </div>
  );
};
