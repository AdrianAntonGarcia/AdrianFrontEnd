import './register.scss';
import { ThemeContext } from '../../../context/Theme.context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Props {}

export const Register = (props: Props) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="container">
      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(8, t('errors.Min8'))
            .max(30, t('errors.Max30'))
            .required(t('errors.Required')),
          email: Yup.string()
            .email(t('errors.EmailError'))
            .required(t('errors.Required')),
          password1: Yup.string()
            .min(8, t('errors.Min8'))
            .max(30, t('errors.Max30'))
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              t('errors.PasswordFormat')
            )
            .required(t('errors.Required')),
          password2: Yup.string()
            .min(8, t('errors.Min8'))
            .max(30, t('errors.Max30'))
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              t('errors.PasswordFormat')
            )
            .required(t('errors.Required'))
            .oneOf([Yup.ref('password1')], t('erros.PasswordMatch')),
        })}
      ></Formik>
    </div>
  );
};
