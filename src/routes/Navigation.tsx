import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';
import './navigation.scss';
import { ThemeContext } from '../context';
import { useContext } from 'react';
import { Login, Register } from '../pages';
import { Home } from '../pages/home/Home';
import { AagButton } from '../components';

interface Props {}

export const Navigation = (props: Props) => {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
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
      <div style={{ marginLeft: '1rem', marginTop: '10px' }}>
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
