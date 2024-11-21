import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { useRecipeStore } from '../component/recipeStore';
import { BrowserRouter as Router, Routes, Route } from 'react- router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipe from './components/DeleteRecipeButton';
import './App.css'

const App = () => {
  

  return (
     <div className='flex justify-center items-center h-screen'>
     <div className='w-96 p-6 rounded-1g shadow-md bg-white text-center'>
      <div className='mb-6'>
        <h3 className='text-2x1 font- semibold'>Recipes Tracker</h3>
      </div>
     </div>
      
      <RecipeList />
      <AddRecipeForm />
      <EditRecipeForm />
      <DeleteRecipe />
      <RecipeDetails />
     </div>
    
  
  )
}

export default App;
