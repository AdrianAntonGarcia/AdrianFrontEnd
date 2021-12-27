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

interface Props {}

export const Navigation = (props: Props) => {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <nav className={darkMode ? 'navBar dark' : 'navBar'}>
        <ul className="ulLast">
          <li className="navItem">
            <button onClick={() => changeTheme()}>dark mode</button>
          </li>
          <li className="navItem">
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Register
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Login
            </NavLink>
          </li>
        </ul>
        <ul className="ulFirst">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Home
          </NavLink>
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
