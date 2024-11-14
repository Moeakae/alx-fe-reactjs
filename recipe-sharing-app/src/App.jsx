import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

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
     </div>
  
  )
}

export default App;
