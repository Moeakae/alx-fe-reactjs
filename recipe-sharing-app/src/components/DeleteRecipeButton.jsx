import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
const DeleteRecipe = () => {
    const { id } = useParams();
    const DeleteRecipe = useRecipeStore((state) => state.DeleteRecipe);
    const navigate = useNavigate();
    const handleDelete = () => {
    deleteRecipe(Number(id));
    navigate('/');
};
return (
    <div>
        <p>Are you sure you to delete this recipe?</p>
        <button onClick={handleDelete}>Yes,Delete</button>
        <button onClick={() =>navigate('/')}>Cancel</button>
    </div>
);
};
export default DeleteRecipe;