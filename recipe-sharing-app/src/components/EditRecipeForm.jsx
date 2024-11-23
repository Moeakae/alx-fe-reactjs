import { useState } from "react";
import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
const EditRecipeForm = () => {
const { id } = useParams();
const navigate = useNavigate();
const updateRecipe = useRecipeStore((state) => state.updateRecipe);
const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
);
const [title, setTitle] = useState(recipe?.title || '');
const [ description, setDescription] = useState(recipe?.description || '');
const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    navigate('/recipe/${id}');
};
if (!recipe) {
    return <p>Recipe not found!</p>
};
return (
    <div>
     <from onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
     
     <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Save Changes</button>
     </from>
     </div>
);
};
export default EditRecipeForm;