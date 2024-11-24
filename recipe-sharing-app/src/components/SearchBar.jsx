import useRecipeStore from "./recipeStore";
const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterRecipes();
    };
    return <input type="text" placeholder="Search recipes..." onChange={handleSearch} />;
};
export default SearchBar;