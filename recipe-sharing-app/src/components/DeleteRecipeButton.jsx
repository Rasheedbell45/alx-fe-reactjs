import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId, redirectToHome = false }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault(); // ✅ consistent with your requirements
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);

      if (redirectToHome) {
        navigate('/'); // optionally navigate back to home after delete
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
