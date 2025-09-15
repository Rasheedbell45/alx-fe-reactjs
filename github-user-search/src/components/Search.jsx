import { useState } from "react";
import { fetchUserData, advancedUserSearch } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);
    setSingleUser(null);
    setSearched(true);

    try {
      if (location || minRepos) {
        // Advanced search if extra filters provided
        const data = await advancedUserSearch(username, location, minRepos);
        setResults(data.items || []);
      } else {
        // Basic search: single user by username
        const data = await fetchUserData(username);
        setSingleUser(data);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4"
      >
        <input
          type="text"
          value={username}
          placeholder="Search by username"
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-md w-full"
        />

        <input
          type="text"
          value={location}
          placeholder="Filter by location"
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md w-full"
        />

        <input
          type="number"
          value={minRepos}
          placeholder="Minimum repositories"
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-md w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && (
          <p className="text-center text-red-500">Looks like we cant find the user</p>
        )}
        {!loading && searched && !error && !singleUser && results.length === 0 && (
          <p className="text-center text-gray-500">
            Looks like we cant find the user
          </p>
        )}

        {/* Single User Result (basic search) */}
        {singleUser && (
          <div className="border rounded-lg p-4 shadow text-center">
            <img
              src={singleUser.avatar_url}
              alt={singleUser.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">
              {singleUser.name || singleUser.login}
            </h2>
            <a
              href={singleUser.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        )}

        {/* Multiple Users Result (advanced search) */}
        {results.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((user) => (
              <li
                key={user.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h2 className="text-lg font-semibold text-center mt-2">
                  {user.login}
                </h2>
                <div className="text-center mt-2">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
