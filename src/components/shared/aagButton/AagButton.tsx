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
}: Props) => {
  const darkMode = theme === 'dark';
  return (
    <div
      style={styleContainer}
      className={`buttonContainer ${classNameContainer}`}
    >
      <button
        onClick={() => onClick()}
        style={styleButton}
        type={type}
        className={
          darkMode
            ? `button dark ${classNameButton}`
            : `button ${classNameButton}`
        }
      >
        <span style={{ marginTop: '3px' }}>{label}</span>
      </button>
    </div>
  );
};
