import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">🍲 Recipe Sharing App</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
