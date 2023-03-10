import axios from 'axios'

const BASE_URL = "https://kintsugi-server.onrender.com";
// const BASE_URL = "http://localhost:3001";

export const instance = axios.create({
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  baseURL: BASE_URL,
})

export const AuthInstance = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: BASE_URL,
})

export const setToken = (token) => {
  if (token) {
    return AuthInstance.defaults.headers.common.authorization = `Bearer ${token}`;
  }
  instance.defaults.headers.common.authorization = ``;
}

export const getItems = async () => {
  const {data} = await axios.get("/api/products/");
  return data.data.result;
};

export const addItem = async (data) => {
  const result = await instance.post(`/api/products/`, data);
  return result;
};

export const login = async (userData) => {
  const { data } = await AuthInstance.post('/api/auth/login', userData);
  setToken(data.token);
  return data;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await AuthInstance.get("/api/auth/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
}