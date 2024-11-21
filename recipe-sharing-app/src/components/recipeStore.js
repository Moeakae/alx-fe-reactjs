import create from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    favorites: [],
    recommendations: [],
    filteredRecipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !==id) })),
    updateRecipe: (updatedRecipe) => 
}));
addFavorite: (recipeId) =>
    set((state) =>({ favorites: [...state.favorites, recipeId] })),
removeFavorite: (recipeId) =>
    set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
    })),
    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) =>
            )
        }
export default useRecipeStore;