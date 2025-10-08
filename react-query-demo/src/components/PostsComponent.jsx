import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    staleTime: 60000, // 1 minute cache
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul style={{ marginTop: "1rem" }}>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "0.5rem" }}>
            <strong>{post.title}</strong>
            <br />
            <small>{post.body}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
