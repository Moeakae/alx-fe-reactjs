import { useRecipeSrore } from "./components/recipeStore";
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter as Router, Routes, Route } from 'react- router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipe from './components/DeleteRecipeButton';
import './App.css'

function App() {
   return (
     <Router>
        <Routes>
          <Route path='/' element={<RecipeList />} />
          <Route path='/add' element={<AddRecipeForm />} />
          <Route path='/recipe/:id' element={<RecipeDetails />} />
          <Route path='/edit/:id' element={<EditRecipeForm />} />
          <Route path='/delete/:id'  element={<DeleteRecipe />} />
        </Routes>
     </Router>
   )
}
export default App;
