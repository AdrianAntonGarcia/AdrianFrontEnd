import navbarStyles from './aagNavbar.module.scss';
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
  /**
   * Devuelve las clases correspondientes dependiendo si el enlace está activo y estña en modo oscuro
   * @param param0 indica si el link está activo
   * @returns
   */
  const isActiveNavlink = ({ isActive }: { isActive: boolean }) => {
    if (isActive && darkMode)
      return `${navbarStyles.navItem} ${navbarStyles['nav-active']} ${navbarStyles.dark}`;
    if (isActive)
      return `${navbarStyles.navItem} ${navbarStyles['nav-active']}`;
    if (darkMode) return `${navbarStyles.navItem} ${navbarStyles.dark}`;
    return navbarStyles.navItem;
  };
  return (
    <nav
      className={
        darkMode
          ? `${navbarStyles.navBar} ${navbarStyles.dark}`
          : navbarStyles.navBar
      }
    >
      <ul className={navbarStyles.ulFirst}>
        <li className={`${navbarStyles.liNone} ${navbarStyles.liMarginLeft}`}>
          <NavLink to="/home" className={isActiveNavlink}>
            {t('navbar.Home')}
          </NavLink>
        </li>
        <li className={`${navbarStyles.liNone} ${navbarStyles.liMarginLeft}`}>
          <NavLink to="/login" className={isActiveNavlink}>
            {t('navbar.Login')}
          </NavLink>
        </li>
        <li className={`${navbarStyles.liNone} ${navbarStyles.liMarginLeft}`}>
          <NavLink to="/register" className={isActiveNavlink}>
            {t('navbar.Register')}
          </NavLink>
        </li>
      </ul>
      <ul className={navbarStyles.ulLast}>
        <li className={`${navbarStyles.liNone} ${navbarStyles.liMarginLeft}`}>
          <AagButton
            onClick={!!changeTheme ? changeTheme : () => {}}
            label={darkMode ? t('navbar.LightMode') : t('navbar.DarkMode')}
            theme={darkMode ? 'dark' : 'light'}
          />
        </li>
        <li className={`${navbarStyles.liNone} ${navbarStyles.liMarginLeft}`}>
          <AagButton
            buttonType="dark"
            onClick={
              i18n.language === 'es'
                ? () => changeLanguage('en')
                : () => changeLanguage('es')
            }
            label={i18n.language === 'es' ? 'en' : 'es'}
            theme={darkMode ? 'dark' : 'light'}
          />
        </li>
      </ul>
    </nav>
  );
};
