import { client } from "./client";

export const authAPI = {
  // 회원가입
  signUp: async (userData) => {
    try {
      const response = await client.post("/register", userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // 로그인
  login: async (credentials) => {
    try {
      const response = await client.post("/api/v1/auth/login", credentials);
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  // 로그아웃
  logout: () => {
    localStorage.removeItem("token");
  },

  // 관리자 정보 추가 등록
  registerAdminInfo: async (userId, adminData) => {
    try {
      const response = await client.post("/register/admin", {
        userId,
        ...adminData,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};
