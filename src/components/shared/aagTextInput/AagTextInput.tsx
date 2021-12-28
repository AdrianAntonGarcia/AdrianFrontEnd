import { useField, ErrorMessage } from 'formik';
import './aagTextInput.scss';
interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const AagTextInput = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field] = useField(props);
  return (
    <>
      <label className="label-input" htmlFor={props.id || props.name}>
        {label}:
      </label>
      <input type="text" className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
