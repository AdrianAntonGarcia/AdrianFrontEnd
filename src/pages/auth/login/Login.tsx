import './login.scss';
import { AagButton, AagTextInput } from '../../../components';
import { Form, Formik } from 'formik';
import { ThemeContext } from '../../../context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useLogin } from '../../../hooks';

export const Login = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { login } = useLogin();
  return (
    <div className="container">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
          console.log(email, password);
          login(email, password);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(t('errors.EmailError'))
            .required(t('errors.Required')),
          password: Yup.string()
            .min(8, t('errors.Min8'))
            .max(30, t('errors.Max30'))
            .required(t('errors.Required')),
        })}
      >
        <Form className="formLogin">
          <AagTextInput label={t('login.Email')} name="email" type="email" />
          <AagTextInput
            label={t('login.Password')}
            name="password"
            type="password"
          />
          <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
            <AagButton
              label={t('login.Login')}
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
