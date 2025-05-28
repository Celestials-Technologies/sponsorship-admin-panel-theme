import axios from "axios";

const API_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

const apiRequest = async <T>(
  url: string,
  method: string = "GET",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = null
): Promise<T> => {
  const response = await axiosInstance({ method, url, data });
  return response.data as T;
};

export { axiosInstance, apiRequest };
