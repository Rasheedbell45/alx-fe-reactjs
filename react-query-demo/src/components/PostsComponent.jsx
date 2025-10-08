import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // Advanced React Query configurations:
    cacheTime: 1000 * 60 * 5, // Keep cache for 5 minutes after unused
    staleTime: 1000 * 30, // Data considered "fresh" for 30 seconds
    refetchOnWindowFocus: false, // Don’t auto-refetch when switching tabs
    keepPreviousData: true, // Retain old data while fetching new data
  });

  // Loading and error states
  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid #ddd",
              paddingBottom: "0.5rem",
            }}
          >
            <strong>{post.title}</strong>
            <p style={{ margin: "0.3rem 0", color: "#555" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
