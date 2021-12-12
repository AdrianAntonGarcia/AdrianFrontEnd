import { useEffect, useState, ReactElement } from 'react';
import { ThemeContext } from '../context';
interface Props {
  children?: ReactElement | ReactElement[];
}

export const ThemeChanger = ({ children }: Props) => {
  const { Provider } = ThemeContext;
  const [themeState, setThemeState] = useState(false);
  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
    }
  };
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return document.body.classList.add('dark');
  });
  return (
    <Provider value={{ darkMode: themeState, changeTheme: handleChange }}>
      {children}
    </Provider>
  );
};
