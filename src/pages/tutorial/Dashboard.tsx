import './Dashboard.scss';
import { FaBeer } from 'react-icons/fa';
import { IoLogoApple } from 'react-icons/io5';
export const Dashboard = () => {
  return (
    <div className="container-dash">
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
              <span className="icon"></span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
