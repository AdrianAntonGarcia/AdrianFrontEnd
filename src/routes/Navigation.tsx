import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './navigation.scss';
import { ThemeChanger } from '../components';
interface Props {}

export const Navigation = (props: Props) => {
  return (
    <BrowserRouter>
      <ThemeChanger>
        <nav>
          <ul className="navBar">
            <li className="navItem">login</li>
            <li className="navItem">register</li>
          </ul>
        </nav>
        <div>Páginas</div>
      </ThemeChanger>
    </BrowserRouter>
  );
};
