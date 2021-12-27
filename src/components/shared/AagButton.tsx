import { CSSProperties } from 'react';
import './aagButton.scss';

export interface Props {
  label: string;
  onClick: () => any;
  classNameContainer?: string;
  classNameButton?: string;
  styleContainer?: CSSProperties;
  styleButton?: CSSProperties;
  theme?: 'dark' | 'light';
}

export const AagButton = ({
  onClick,
  classNameContainer,
  classNameButton,
  label,
  styleContainer,
  styleButton,
  theme,
}: Props) => {
  const darkMode = theme === 'dark';
  return (
    <div
      style={styleContainer}
      className={`buttonContainer ${classNameContainer}`}
    >
      <button
        onClick={onClick}
        style={styleButton}
        className={
          darkMode
            ? `button dark ${classNameButton}`
            : `button ${classNameButton}`
        }
      >
        {label}
      </button>
    </div>
  );
};
