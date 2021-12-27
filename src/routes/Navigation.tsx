import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './navigation.scss';
import { Login, Register } from '../pages';
import { Home } from '../pages/home/Home';
import { AagNavbar } from '../components';

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <BrowserRouter>
      <AagNavbar />
      <div style={{ marginLeft: '1rem', marginTop: '10px' }}>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
