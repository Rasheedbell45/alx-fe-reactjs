import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipe.id);
      navigate('/');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      <div className="mb-4">
        <Link to="/" className="underline">← Back</Link>
      </div>

      {!isEditing ? (
        <>
          <h1 className="text-2xl font-bold">{recipe.title}</h1>
          <p className="mt-3">{recipe.description}</p>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white py-2 px-4 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <EditRecipeForm recipe={recipe} onCancel={() => setIsEditing(false)} />
      )}

      <div className="mt-4 flex gap-3">
  <button
    onClick={() => setIsEditing(true)}
    className="bg-yellow-500 text-white py-2 px-4 rounded"
  >
    Edit
  </button>
  <DeleteRecipeButton recipeId={recipe.id} redirectToHome={true} />
</div>
    </div>
  );
};

export default RecipeDetails;
