import './register.scss';
import { ThemeContext } from '../../../context/Theme.context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AagButton, AagTextInput } from '../../../components';

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
            .required(t('errors.Required')),
          password2: Yup.string()
            .min(8, t('errors.Min8'))
            .max(30, t('errors.Max30'))
            .required(t('errors.Required'))
            .oneOf([Yup.ref('password1')], t('errors.PasswordMatch')),
        })}
      >
        <Form className="formRegister">
          <AagTextInput label={t('register.Name')} name="name" type="text" />
          <AagTextInput label={t('login.Email')} name="email" type="email" />
          <AagTextInput
            label={t('login.Password')}
            name="password1"
            type="password"
          />
          <AagTextInput
            label={t('register.PasswordConfirm')}
            name="password2"
            type="password"
          />
          <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
            <AagButton
              label={t('register.Register')}
              type="submit"
              theme={darkMode ? 'dark' : 'light'}
              styleContainer={{ marginTop: '5%' }}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};