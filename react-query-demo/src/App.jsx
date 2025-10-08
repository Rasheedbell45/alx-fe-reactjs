import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

// Create a QueryClient instance (required for React Query)
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>React Query Demo</h1>
        <p>
          This demo fetches posts using <b>@tanstack/react-query</b> from JSONPlaceholder API.
        </p>
        <PostsComponent />
      </div>

      {/* Devtools helps you inspect React Query cache and refetch behavior */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
