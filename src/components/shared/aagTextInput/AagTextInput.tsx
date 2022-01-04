import './aagTextInput.scss';
import { CSSProperties } from 'react';
import { useField, ErrorMessage } from 'formik';
interface Props {
  classNameInput?: string;
  classNameLabel?: string;
  label: string;
  name: string;
  showLabel?: boolean;
  styleInput?: CSSProperties;
  styleLabel?: CSSProperties;
  type?: 'text' | 'email' | 'password';
  //   ya es opcional por definicion
  [x: string]: any;
}
export const AagTextInput = ({ label, showLabel = true, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field] = useField(props);
  return (
    <>
      {showLabel && (
        <label
          style={props.styleLabel}
          className={`label-input ${props.classNameLabel}`}
          htmlFor={props.id || props.name}
        >
          {label}:
        </label>
      )}
      <input
        style={props.styleInput}
        className={`text-input ${props.classNameInput}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component="span" className="text-error" />
    </>
  );
};
