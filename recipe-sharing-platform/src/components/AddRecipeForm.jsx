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
            </form>
        </div>
    )
}