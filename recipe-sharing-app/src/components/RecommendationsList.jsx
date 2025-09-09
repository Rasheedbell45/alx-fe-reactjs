import { useRecipeStore } from '../store/recipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">🍴 Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} className="border p-3 rounded mb-3">
          <h3 className="text-lg font-semibold">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p className="truncate">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
