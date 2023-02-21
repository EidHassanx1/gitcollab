import './App.css';
import Main from './components/Main';
//import RecipeCard from './components/RecipeCard';
import './recipes.css';
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage';
//import recipes from './resources/recipes';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';

function App() {
  const [recipes, setRecipes] =  useState([])

  const getRecipies = async() =>{
    const response = await fetch('https://api.edamam.com/search?q=american&app_id=5d34cc22&app_key=011bc26346e1e13878d6e7a00f24774f&diet=low-carb')
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
    console.log(recipes)
  }

  useEffect(() => {
    getRecipies()
  },[])

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main />} />
        <Route path=':slug' element={<RecipePage recipes={recipes} />}/>
      </Route>
    </Routes>
  );
}

export default App;
