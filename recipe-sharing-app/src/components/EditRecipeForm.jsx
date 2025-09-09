import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe, onCancel }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });

    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe Title"
        className="border p-2 rounded"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe Description"
        className="border p-2 rounded"
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
