import axios from "axios";

// 로그인
export const fetchLogin = async ({ userId, password }) => {
    const { data } = await axios.get(`/login/${userId}/${password}`);
    return data;
  };