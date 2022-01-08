import styles from './aagDashboard.module.scss';
import { useState } from 'react';
import cx from 'classnames';
import {
  IoHomeOutline,
  IoMenuOutline,
  IoLogInOutline,
  IoPushOutline,
} from 'react-icons/io5';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';
import { Cards, Home, List, Login, Register } from '../../pages';

export const AagDashboard = () => {
  const [dashActive, setDashActive] = useState(false);
  return (
    // <div className={styles.container}>
    <BrowserRouter>
      {/* dash */}
      <div className={styles.container}>
        <div className={cx(styles.dash, dashActive && styles.active)}>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? styles.hovered : '')}
                onClick={() => dashActive && setDashActive(!dashActive)}
              >
                <span className={styles.icon}>
                  <IoHomeOutline />
                </span>

                <span className={styles.title}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.hovered : '')}
                onClick={() => dashActive && setDashActive(!dashActive)}
              >
                <span className={styles.icon}>
                  <IoLogInOutline />
                </span>

                <span className={styles.title}>Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.hovered : '')}
                onClick={() => dashActive && setDashActive(!dashActive)}
              >
                <span className={styles.icon}>
                  <IoPushOutline />
                </span>

                <span className={styles.title}>Register</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* main */}
        <div className={cx(styles.main, dashActive && styles.active)}>
          <div className={cx(styles.btnClose, dashActive && styles.active)}>
            <div
              className={cx(styles.btn)}
              onClick={() => setDashActive(!dashActive)}
            >
              <IoMenuOutline />
            </div>
          </div>
          <div className={styles.mainContent}>
            <Routes>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/cards" element={<Cards />}></Route>
              <Route path="/list" element={<List />}></Route>
              <Route
                path="/*"
                element={<Navigate to="/home" replace />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
