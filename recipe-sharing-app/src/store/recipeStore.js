import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // update an existing recipe (expects full recipe object with same id)
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // delete by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // replace whole list (useful for initialization)
  setRecipes: (recipes) => set({ recipes }),
}));
