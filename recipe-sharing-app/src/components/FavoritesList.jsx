import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">❤️ My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} className="border p-3 rounded mb-3">
          <h3 className="text-lg font-semibold">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p className="truncate">{recipe.description}</p>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
