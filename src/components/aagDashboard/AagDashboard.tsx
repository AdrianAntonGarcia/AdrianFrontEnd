import styles from './aagDashboard.module.scss';
import { useState } from 'react';
import cx from 'classnames';
import { IoMenuOutline } from 'react-icons/io5';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
            <li></li>
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
