import axios from "axios";

const BASE_URL = "https://api.github.com";
const BASE_URL = "https://api.github.com/search/users?q";

// Basic: Fetch a single user by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// Advanced: Search users with filters (username, location, repo count)
export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
};
