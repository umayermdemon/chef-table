import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Our from './Components/Our/Our'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cooks from './Components/Cooks/Cooks'

function App() {
  const [recipes, setRecipes]=useState([]);
  useEffect(()=>{
    fetch('/Recipes.json')
    .then(res=>res.json())
    .then(data=> setRecipes(data))
  },[])

 const [cooks, setCooks]=useState([])
 const handleWantToCook=recipe=>{
  const isExist=cooks.find(cook=>cook.id===recipe.id)
  if(!isExist){
    const newCook=[...cooks, recipe]
    setCooks(newCook)
  }
  else{
    toast.warn("Already Exist this item!")
  }
  
 }
 
 const handleCurrentCook=()=>{
  console.log("cooked")
 }
  return (
    <div className='max-w-7xl mx-auto mt-8 space-y-4 lg:space-y-8'>
      <Header></Header>
      <Hero></Hero>
      <Our></Our>
      <div className='flex gap-6'>
        <Recipes recipes={recipes} handleWantToCook={handleWantToCook}></Recipes>
        <Cooks  cooks={cooks}  handleCurrentCook={handleCurrentCook}></Cooks>
      </div>
      <ToastContainer />
    </div>
      
    
  )
}

export default App
