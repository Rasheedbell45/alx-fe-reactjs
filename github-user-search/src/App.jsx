import { useState } from "react";
import { searchUsers } from "./services/githubApi";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    if (!query) return;
    const data = await searchUsers(query);
    setUsers(data.items || []);
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
