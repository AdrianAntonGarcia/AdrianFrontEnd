import './dashboard.scss';
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
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <IoLogoApple />
              </span>
              <span className="title">Brand Name</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoHomeOutline />
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoPersonOutline />
              </span>
              <span className="title">Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoChatbubblesOutline />
              </span>
              <span className="title">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoHelpOutline />
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoSettingsOutline />
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoLockClosedOutline />
              </span>
              <span className="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <IoLogOutOutline />
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
