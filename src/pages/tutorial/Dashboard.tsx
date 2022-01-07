import dashboardStyles from './dashboard.module.scss';
import mainStyles from './main.module.scss';
import { AagButton } from '../../components/shared/aagButton/AagButton';
import { Home, Login, Register } from '..';
import { ThemeContext } from '../../context/Theme.context';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IoChatbubblesOutline,
  IoHelpOutline,
  IoHomeOutline,
  IoLockClosedOutline,
  IoLogoApple,
  IoLogOutOutline,
  IoMenuOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import cx from 'classnames';

export const Dashboard = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { darkMode, changeTheme } = useContext(ThemeContext);
  const [t, i18n] = useTranslation();
  /**
   * Cambia el lenguaje de la aplicación
   * @param lng
   */
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  /**
   * Abre o cierra el menú lateral
   */
  const toggleMenu = () => {
    setMenuToggle((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <div className={dashboardStyles.container}>
        <div
          className={cx(
            dashboardStyles.navigation,
            darkMode && dashboardStyles.dark,
            menuToggle && dashboardStyles.active
          )}
        >
          <ul>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoLogoApple />
                </span>
                <span className={dashboardStyles.title}>Brand Name</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoHomeOutline />
                </span>
                <span className={dashboardStyles.title}>Dashboard</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoPersonOutline />
                </span>
                <span className={dashboardStyles.title}>Customers</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoChatbubblesOutline />
                </span>
                <span className={dashboardStyles.title}>Message</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoHelpOutline />
                </span>
                <span className={dashboardStyles.title}>Help</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoSettingsOutline />
                </span>
                <span className={dashboardStyles.title}>Settings</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoLockClosedOutline />
                </span>
                <span className={dashboardStyles.title}>Password</span>
              </NavLink>
            </li>
            <li className={darkMode ? dashboardStyles.dark : ''}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? dashboardStyles.hovered : ''
                }
              >
                <span className={dashboardStyles.icon}>
                  <IoLogOutOutline />
                </span>
                <span className={dashboardStyles.title}>Sign Out</span>
              </NavLink>
            </li>
            <li
              className={cx(
                darkMode ? dashboardStyles.dark : '',
                dashboardStyles.noshadow
              )}
            >
              <AagButton
                onClick={changeTheme}
                label={darkMode ? t('navbar.LightMode') : t('navbar.DarkMode')}
                theme={darkMode ? 'dark' : 'light'}
              />
            </li>
            <li
              className={cx(
                darkMode ? dashboardStyles.dark : '',
                dashboardStyles.noshadow
              )}
            >
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
        </div>
      </div>
      <div className={cx(mainStyles.main, menuToggle && mainStyles.active)}>
        <div className={mainStyles.topbar}>
          <div
            className={cx(mainStyles.toggle, darkMode && mainStyles.dark)}
            onClick={() => toggleMenu()}
          >
            <IoMenuOutline />
          </div>
          {/* search */}
          <div className={mainStyles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              <IoSearchOutline />
            </label>
          </div>
          {/* user image */}
          <div className={mainStyles.user}>
            <img src="/assets/user.jpg" alt="User Image" />
          </div>
        </div>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
