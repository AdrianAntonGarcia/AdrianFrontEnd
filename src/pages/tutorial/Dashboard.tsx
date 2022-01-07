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

export const Dashboard = () => {
  return (
    <div className={dashboardStyles.container}>
      <div className={dashboardStyles.navigation}>
        <ul>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoLogoApple />
              </span>
              <span className={dashboardStyles.title}>Brand Name</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoHomeOutline />
              </span>
              <span className={dashboardStyles.title}>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoPersonOutline />
              </span>
              <span className={dashboardStyles.title}>Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoChatbubblesOutline />
              </span>
              <span className={dashboardStyles.title}>Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoHelpOutline />
              </span>
              <span className={dashboardStyles.title}>Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoSettingsOutline />
              </span>
              <span className={dashboardStyles.title}>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoLockClosedOutline />
              </span>
              <span className={dashboardStyles.title}>Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={dashboardStyles.icon}>
                <IoLogOutOutline />
              </span>
              <span className={dashboardStyles.title}>Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
