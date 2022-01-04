import './login.scss';
import { AagButton, AagTextInput } from '../../../components';
import { Form, Formik } from 'formik';
import { passRegExp } from '../../../shared';
import { ThemeContext } from '../../../context';
import { useContext } from 'react';
import { UserLogin } from '../../../hooks';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const Login = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { login } = UserLogin();
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
            .matches(passRegExp, t('errors.PasswordFormat'))
            .required(t('errors.Required')),
        })}
      >
        <Form className="formLogin">
          <AagTextInput
            showLabel={true}
            label={t('login.Email')}
            name="email"
            placeholder={t('login.Email')}
            type="email"
          />
          <AagTextInput
            showLabel={true}
            label={t('login.Password')}
            name="password"
            placeholder={t('login.Password')}
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
