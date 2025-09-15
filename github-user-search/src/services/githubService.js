import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw error; // This will be caught in Search.jsx
  }
};
