import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
  },
});

export const searchUsers = async (username) => {
  const response = await api.get(`/search/users?q=${username}`);
  return response.data;
};

export const getUserDetails = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
