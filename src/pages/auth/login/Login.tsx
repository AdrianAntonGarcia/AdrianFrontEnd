import './login.scss';
import { AagButton, AagTextInput } from '../../../components';
import { Form, Formik } from 'formik';
import { ThemeContext } from '../../../context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

export const Login = (props: Props) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="container">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
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
