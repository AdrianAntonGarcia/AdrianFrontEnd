import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register } from '../pages';
import { Home } from '../pages/home/Home';
import { AagNavbar } from '../components';
import { ThemeContext } from '../context';
import { useContext } from 'react';

export const Navigation = () => {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <AagNavbar
        changeTheme={changeTheme}
        theme={darkMode ? 'dark' : 'light'}
      />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
