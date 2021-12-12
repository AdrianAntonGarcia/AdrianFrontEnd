import { BrowserRouter } from 'react-router-dom';
import './navigation.scss';
import { ThemeContext } from '../context';
import { useContext } from 'react';
interface Props {}

export const Navigation = (props: Props) => {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <nav>
        <ul className={darkMode ? 'navBar' : 'navBar dark'}>
          <li className="navItem">login</li>
          <li className="navItem">register</li>
          <li className="navItem">
            <button onClick={changeTheme}>dark mode {darkMode}</button>
          </li>
        </ul>
      </nav>
      <div>Páginas</div>
    </BrowserRouter>
  );
};
