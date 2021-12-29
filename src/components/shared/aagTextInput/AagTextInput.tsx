import './aagTextInput.scss';
import { CSSProperties } from 'react';
import { useField, ErrorMessage } from 'formik';
interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  classNameLabel?: string;
  classNameInput?: string;
  styleLabel?: CSSProperties;
  styleInput?: CSSProperties;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const AagTextInput = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field] = useField(props);
  return (
    <>
      <label
        style={props.styleLabel}
        className={`label-input ${props.classNameLabel}`}
        htmlFor={props.id || props.name}
      >
        {label}:
      </label>
      <input
        style={props.styleInput}
        type="text"
        className={`text-input ${props.classNameInput}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
