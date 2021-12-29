import './aagNavbar.scss';
import { AagButton } from '..';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface Props {
  changeTheme?: () => void;
  theme: 'dark' | 'light';
}

export const AagNavbar = ({ changeTheme, theme }: Props) => {
  const darkMode = theme === 'dark';
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav className={darkMode ? 'navBar dark' : 'navBar'}>
      <ul className="ulLast">
        <div style={{ display: 'flex' }}>
          <li className="liNone liLast">
            <AagButton
              onClick={!!changeTheme ? changeTheme : () => {}}
              label={darkMode ? t('navbar.LightMode') : t('navbar.DarkMode')}
              theme={darkMode ? 'dark' : 'light'}
            />
          </li>
          <li className="liNone liLast">
            <AagButton
              buttonType="light"
              onClick={
                i18n.language === 'es'
                  ? () => changeLanguage('en')
                  : () => changeLanguage('es')
              }
              label={i18n.language === 'es' ? 'en' : 'es'}
              theme={darkMode ? 'dark' : 'light'}
            />
          </li>
        </div>

        <div style={{ display: 'flex' }} className="mt-div-small">
          <li className="liNone liLast">
            <NavLink
              to="/login"
              className={({ isActive }) => {
                if (isActive && darkMode) return ' navItem dark nav-active';
                if (isActive) return 'navItem nav-active';
                if (darkMode) return 'navItem dark';
                return 'navItem';
              }}
            >
              {t('navbar.Login')}
            </NavLink>
          </li>
          <li className="liNone liLast">
            <NavLink
              to="/register"
              className={({ isActive }) => {
                if (isActive && darkMode) return 'navItem dark nav-active ';
                if (isActive) return 'navItem nav-active';
                if (darkMode) return 'navItem dark';
                return 'navItem';
              }}
            >
              {t('navbar.Register')}
            </NavLink>
          </li>
        </div>
      </ul>
      <ul className="ulFirst">
        <li className="liNone">
          <NavLink
            to="/home"
            className={({ isActive }) => {
              if (isActive && darkMode) return 'navItem dark nav-active ';
              if (isActive) return 'navItem nav-active';
              if (darkMode) return 'navItem dark';
              return 'navItem';
            }}
          >
            {t('navbar.Home')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
