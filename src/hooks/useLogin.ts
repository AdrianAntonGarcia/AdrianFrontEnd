import axios from 'axios';
import { useState } from 'react';
import { LoginResponse } from '../interfaces';
import { stringify } from 'qs';

export const useLogin = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse>(
    {} as LoginResponse
  );

  const login = async (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    console.log(params);
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/login`,
      params
    );
    console.log(response);
  };
  console.log(process.env.REACT_APP_API_URL);
  return { login, loginResponse };
};
