import React, { useState, useEffect } from "react";
import recipeData from "../data.json"; // Adjust the path based on the location of data.json
import { Link } from 'react-router-dom';
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        // set the recipes directly from from the imported data
        setRecipes(recipeData);
    }, []);
    return (
        <div className="container mx-auto p4">
            <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
            <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:-lg hover:scale-105 transition transform duration-300">
                        <img src="recipe.image" alt="recipe.title" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600 mb-4">{recipe.summary}</p>
                            <a href={'/recipes/${recipe.id}'} className="text-blue-500 hover:underline">View Recipe</a>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    );

};
export default HomePage;