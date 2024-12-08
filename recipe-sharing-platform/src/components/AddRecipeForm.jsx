import React, { useState } from "react";
const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title:"",
        ingredients:"",
        steps:"",
    });
    const [validate, errors, setErrors] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title && !formData.ingredients && !formData.steps) {
            setValidationError("All fields are required!");
            return;
        }
        if (formData.ingredients.split(",").length < 2) {
            setValidationError("Please provide at least two ingredients.");
            return;
        }
        setValidationError("");
        console.log("Recipe Submitted:", formData);
        setFormData({
            title:"",
            ingredients:"",
            step:"",
        });
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Add New Recipe</h2>
                {validationError && (
                    <p className="text-red-500 text-sm mb-4">{validationError}</p>
                )}
                {/* Recipe Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Recipe Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500" placeholder="Enter recipe title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients (comma-separated)</label>
                    <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={(e) => setTitle(e.target.valu)}
                    className="w-full px-3 py-2 border-gray-300 rounded-lg focus:outline focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter ingredients, separated by comma"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">Preparation steps (comma-separated)</label>
                    <textarea id="steps" name="ingredients" value={formData.steps} onChange={(e) => setTitle(e.target.valu)}
                    className="w-full px-3 py-2 border-gray-300 rounded-lg focus:outline focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the preparation steps"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"></button>
            </form>
        </div>

    );
};
export default AddRecipeForm;