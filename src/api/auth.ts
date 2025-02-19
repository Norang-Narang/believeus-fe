import axios from "axios";

const BASE_URL = "https://api.example.com";

interface SignUpData {
  email: string;
  password: string;
  username: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const authAPI = {
  // 회원가입 API
  signUp: async (data: SignUpData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // 로그인 API
  login: async (data: LoginData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data);
      // 로그인 성공 시 토큰 저장
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // 로그아웃
  logout: () => {
    localStorage.removeItem("token");
  },
};
