import axios, { AxiosError } from 'axios';

export class ApiError extends Error {
  status?: string;
  url?: string;
}

// デフォルト config の設定
export const axiosClient = axios.create({
  timeout: 30000,
});

axiosClient.interceptors.request.use(async (config) => {
  //   config.headers = {};
  return config;
});

axiosClient.interceptors.response.use(
  async (res) => {
    return res;
  },
  (e: AxiosError) => {
    throw e;
  },
);
