import axios from 'axios';
import { useState } from 'react';
import { LoginResponse } from '../interfaces';

export const useLogin = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse>(
    {} as LoginResponse
  );

  /**
   * Función que realiza el login del usuario llamando al servicio de login
   * @param email email del usuario a loguear
   * @param password contraseña del usuario a ingresar
   */
  const login = async (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    // console.log(params);
    const response = await axios
      .post<LoginResponse>(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        params
      )
      .catch((err) => {
        console.log(err.response.data.errorMsg);
        return { data: err.response.data };
      });
    console.log(response.data);
  };
  return { login, loginResponse };
};
