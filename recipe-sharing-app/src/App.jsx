import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function HomePage() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr className="my-6" />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className="p-4 border-b">
        <Link to="/" className="font-semibold">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
