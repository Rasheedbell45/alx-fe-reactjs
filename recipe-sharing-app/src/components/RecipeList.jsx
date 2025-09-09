import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet. Add one below!</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
    }
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded-lg p-3 mb-3">
          <h3 className="text-lg font-semibold">
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p className="truncate">{recipe.description}</p>
          <div className="mt-2">
            <Link
              to={`/recipes/${recipe.id}`}
              className="mr-3 underline"
            >
              View
            </Link>
            <button
              onClick={() => handleDelete(recipe.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
