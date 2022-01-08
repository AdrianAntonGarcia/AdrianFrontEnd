import styles from './aagDashboard.module.scss';
import { useState } from 'react';
import cx from 'classnames';
import { IoMenuOutline } from 'react-icons/io5';

export const AagDashboard = () => {
  const [dashActive, setDashActive] = useState(false);
  console.log(dashActive);
  return (
    // <div className={styles.container}>
    <>
      {/* dash */}
      <div className={cx(styles.dash, dashActive && styles.active)}></div>
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
        <div className={styles.mainContent}>maiin</div>
      </div>
    </>
    // </div>
  );
};
