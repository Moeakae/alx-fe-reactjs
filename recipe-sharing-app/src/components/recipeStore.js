import create from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({searchTerm: term}),
    favorites: [],
    recommendations: [],
    filteredRecipes: [],
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
    updateRecipe: () =>
        filterRecipes=() =>
            set((state) => ({
                filteredRecipes: state.recipes.filter((recipe) =>
                    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            
    ),
})),
addFavorite:(recipeId) =>
    set((state) =>({ favorites: [...state.favorites, recipeId] })),
removeFavorite: (recipeId) =>
    set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
    })),
    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) =>
                    state.favorites.includes(recipe.id) && Math.random() >0.5
            );
            return { recommendations: recommended};
                }),
            }));
export default useRecipeStore;