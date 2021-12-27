import { createContext, ReactElement, useEffect, useState } from 'react';
import { ThemeContextInterface } from '../interfaces';

export const ThemeContext = createContext({} as ThemeContextInterface);

interface Props {
  children?: ReactElement | ReactElement[];
}

export const ThemeChangerProvider = ({ children }: Props) => {
  const { Provider } = ThemeContext;
  const [themeState, setThemeState] = useState(false);
  const handleChange = () => {
    setThemeState((prevState) => !prevState);
  };
  useEffect(() => {
    const theme = localStorage.getItem('Theme');
    if (theme === 'dark') setThemeState(true);
  }, []);
  useEffect(() => {
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [themeState]);

  return (
    <Provider value={{ darkMode: themeState, changeTheme: handleChange }}>
      {children}
    </Provider>
  );
};
