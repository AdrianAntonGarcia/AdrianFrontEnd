export interface LoginResponse {
  ok: boolean;
  token: string;
  user: User;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
}
