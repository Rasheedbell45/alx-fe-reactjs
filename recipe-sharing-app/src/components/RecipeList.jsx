import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes added yet. Add one below!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border rounded-lg p-3 mb-3 shadow-sm bg-gray-50"
        >
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
