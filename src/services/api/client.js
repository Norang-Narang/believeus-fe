import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  console.error("API URL이 설정되지 않았습니다.");
}

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// CORS 관련 설정
client.defaults.withCredentials = false; // CORS 문제로 false로 변경

// 요청 인터셉터 추가
client.interceptors.request.use(
  (config) => {
    console.log("Request URL:", config.baseURL + config.url); // URL 확인용
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
