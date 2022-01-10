import { AagButton, AagModal, AagTextInput } from '../../../components';
import { Form, Formik } from 'formik';
import { passRegExp } from '../../../shared';
import { ThemeContext } from '../../../context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import loginStyles from './login.module.scss';
import { ModalContext } from '../../../context/Modal.context';
import { useLogin } from '../../../hooks';

export const Login = () => {
  const { t } = useTranslation();
  const { show, modalText, openModal } = useContext(ModalContext);
  const { darkMode } = useContext(ThemeContext);
  const { login } = useLogin();
  return (
    <div className={loginStyles.container}>
      <AagModal
        show={show}
        textCancel={''}
        showCancelButton={false}
        onSuccess={() => openModal()}
        textSuccess={'Ok'}
        textModal={modalText}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
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
