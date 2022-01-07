import { CSSProperties } from 'react';
import buttonStyles from './aagButton.module.scss';
import cx from 'classnames';
export interface Props {
  label: string;
  onClick?: () => void;
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
  onClick = () => ({}),
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
      className={cx(buttonStyles.buttonContainer, classNameContainer)}
    >
      <button
        onClick={() => onClick()}
        style={{ ...styleButton }}
        type={type}
        className={
          darkMode
            ? cx(
                buttonType && buttonStyles[buttonTypeStyles[buttonType]],
                buttonStyles.button,
                buttonStyles.dark,
                classNameButton
              )
            : cx(
                buttonType && buttonStyles[buttonTypeStyles[buttonType]],
                buttonStyles.button,
                classNameButton
              )
        }
      >
        <span>{label}</span>
      </button>
    </div>
  );
};
