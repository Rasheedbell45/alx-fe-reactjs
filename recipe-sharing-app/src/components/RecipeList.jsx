import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes());

  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded-lg p-3 mb-3">
          <h3 className="text-lg font-semibold">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p className="truncate">{recipe.description}</p>
          <div className="mt-2 flex gap-2">
            <Link to={`/recipe/${recipe.id}`} className="underline">
              View
            </Link>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
