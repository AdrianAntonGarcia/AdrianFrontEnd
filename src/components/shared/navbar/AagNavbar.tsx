import './aagNavbar.scss';
import { AagButton } from '../..';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../context';
import { useContext } from 'react';

export const AagNavbar = () => {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  return (
    <nav className={darkMode ? 'navBar dark' : 'navBar'}>
      <ul className="ulLast">
        <li className="liNone liLast">
          <AagButton
            onClick={changeTheme}
            label={darkMode ? 'Light mode' : 'Dark mode'}
            theme={darkMode ? 'dark' : 'light'}
          />
          {/* <button onClick={() => changeTheme()}>dark mode</button> */}
        </li>
        <li className="liNone liLast">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'nav-active navItem' : 'navItem'
            }
          >
            Register
          </NavLink>
        </li>
        <li className="liNone liLast">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'nav-active navItem' : 'navItem'
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
      <ul className="ulFirst">
        <li className="liNone">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'nav-active navItem' : 'navItem'
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
