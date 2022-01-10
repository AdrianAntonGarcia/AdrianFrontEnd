import { AagButton, AagModal, AagTextInput } from '../../../components';
import { Form, Formik } from 'formik';
import { passRegExp } from '../../../shared';
import { ThemeContext } from '../../../context';
import { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import loginStyles from './login.module.scss';
import { ModalContext } from '../../../context/Modal.context';
import { useLogin } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { darkMode } = useContext(ThemeContext);
  const { login } = useLogin();
  const { show, modalText, openModal, setModalText } = useContext(ModalContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const tokenRef = useRef('');
  return (
    <div className={loginStyles.container}>
      <AagModal
        show={show}
        textCancel={''}
        showCancelButton={false}
        darkTheme={darkMode}
        onSuccess={() => {
          openModal();
          localStorage.setItem('token', tokenRef.current);
          navigate('/home');
        }}
        textSuccess={'Ok'}
        textModal={modalText}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
          login(email, password).then(({ ok, errorMsg, token }) => {
            if (ok) {
              tokenRef.current = token;
              setModalText('Login correcto');
              openModal();
            } else {
              localStorage.removeItem('token');
              setModalText('Login incorrecto: ' + errorMsg);
              openModal();
            }
          });
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
        <Form className={loginStyles.formLogin}>
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
