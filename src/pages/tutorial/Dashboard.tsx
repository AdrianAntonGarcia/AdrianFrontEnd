import dashboardStyles from './dashboard.module.scss';
import {
  IoLogoApple,
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubblesOutline,
  IoHelpOutline,
  IoSettingsOutline,
  IoLockClosedOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AagButton } from '../../components/shared/aagButton/AagButton';
import { Home, Login, Register } from '..';
import { ThemeContext } from '../../context/Theme.context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

export const Dashboard = () => {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  return (
    <BrowserRouter>
      <div className={dashboardStyles.dashboardContainer}>
        <div
          className={cx(
            dashboardStyles.navigation,
            darkMode && dashboardStyles.dark
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
      <div className={dashboardStyles.main}>
        <div className="">
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/*" element={<Navigate to="/home" replace />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
