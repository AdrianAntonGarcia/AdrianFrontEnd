/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { NavLink, BrowserRouter } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className={dashboardStyles.dashboardContainer}>
        <div className={dashboardStyles.navigation}>
          <ul>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoLogoApple />
                </span>
                <span className={dashboardStyles.title}>Brand Name</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoHomeOutline />
                </span>
                <span className={dashboardStyles.title}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoPersonOutline />
                </span>
                <span className={dashboardStyles.title}>Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoChatbubblesOutline />
                </span>
                <span className={dashboardStyles.title}>Message</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoHelpOutline />
                </span>
                <span className={dashboardStyles.title}>Help</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoSettingsOutline />
                </span>
                <span className={dashboardStyles.title}>Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoLockClosedOutline />
                </span>
                <span className={dashboardStyles.title}>Password</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <span className={dashboardStyles.icon}>
                  <IoLogOutOutline />
                </span>
                <span className={dashboardStyles.title}>Sign Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
};
