import  useRecipeStore from '../recipeStore';
const RecommendationsList = () => {
    const Recommendations = useRecipeStore((state) =>state.Recommendations);
    const generateRecommendations = useRecipeStore(
        (state) => state.generateRecommendations
    );
    return (
        <div>
            <h2>Recommended Recipes</h2>
            <button onClick={generateRecommendations}>Generate Recommendation</button>
            {Recommendations.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
        </div>
            ))}
        </div>
    );
};
export default RecommendationsList;