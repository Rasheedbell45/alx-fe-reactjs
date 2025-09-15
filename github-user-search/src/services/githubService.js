import axios from "axios";

const BASE_URL = "https://api.github.com";
const BASE_URL = "https://api.github.com/search/users?q";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
  return response.data;
};

export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, { headers });
  return response.data;
};
