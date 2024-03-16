import { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Our from './Components/Our/Our'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cooks from './Components/Cooks/Cooks'

function App() {
  const [cooks, setCook]=useState([])
 const handleWantToCook=recipe=>{
  const isExist=cooks.find(cook=>cook.id===recipe.id)
  if(!isExist){
    const newCook=[...cooks, recipe]
    setCook(newCook)
  }
  else{
    toast.warn("Already Exist this item!")
  }
  
 }
  return (
    <div className='max-w-7xl mx-auto mt-8 space-y-4 lg:space-y-8'>
      <Header></Header>
      <Hero></Hero>
      <Our></Our>
      <div className='flex gap-6'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cooks cooks={cooks}></Cooks>
      </div>
      <ToastContainer />
    </div>
      
    
  )
}

export default App
