import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced Search API
export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
};
