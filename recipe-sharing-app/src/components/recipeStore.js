import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // search/filter
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // actions for recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  setRecipes: (recipes) => set({ recipes }),

  // derived state: filtered recipes based on search term
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm.trim()) return recipes;

    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));
