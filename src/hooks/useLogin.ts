import axios from 'axios';
import { LoginResponse } from '../interfaces';

export const useLogin = () => {
  /**
   * Función que realiza el login del usuario llamando al servicio de login
   * @param email email del usuario a loguear
   * @param password contraseña del usuario a ingresar
   */
  const login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    const { data } = await axios
      .post<LoginResponse>(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        params
      )
      .catch((err) => {
        return { data: err.response.data };
      });
    return data;
  };
  return { login };
};
