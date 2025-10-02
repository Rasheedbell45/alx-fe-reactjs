import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // fetching from public folder
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🍳 Recipe Sharing Platform</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3:grid-cols-1">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
