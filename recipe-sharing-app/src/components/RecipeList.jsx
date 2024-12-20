import { link } from 'react-router-dom';
import  useRecipeStore from './recipeStore';
const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.filteredRecipes);
    return (
        <div>
        {recipes.map((recipe) => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.desciption}</p>
            </div>
        ))}
        </div>
    );
};
export default RecipeList;