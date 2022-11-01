import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_SERVER,
  headers: { 'Content-Type': 'application/json' },
};

export const api = axios.create(DEFAULT_CONFIG);

api.interceptors.response.use(
  config => config,
  error => error.response
);

api.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    config.headers.Accept = 'application/vnd.github+json';
    return config;
  },
  () => ({ message: '런타임 에러가 발생했습니다!' })
);
