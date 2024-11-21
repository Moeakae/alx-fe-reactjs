import { useRecipeStore } from './recipeStore';
import { useParams,useNavigate } from 'react- router- dom';
const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore(( state) =>
        state.recipes.find((recipe) => recipe.id ===Number(id))
);
const navigate = useNavigate();
if  (!recipe) {
    return<p>Recipe not found!</p>
}
return (
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button onClick={() => navigate('/edit/${id}')}>Edit</button>
        <button onClick={() =>navigate('/delete/${id}')}>Delete</button>
    </div>
);
};
export default RecipeDetails;
