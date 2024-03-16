import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleWantToCook}) => {
  const [recipes, setRecipes]=useState([]);
  useEffect(()=>{
    fetch('/public/Recipes.json')
    .then(res=>res.json())
    .then(data=> setRecipes(data))
  },[])
  return (
    <div className="w-3/5">
      <div className="grid grid-cols-2 gap-4">
       {
        recipes.map((recipe, idx)=><Recipe 
        key={idx} 
        recipe={recipe}
        handleWantToCook={handleWantToCook}
        ></Recipe>)
       }
      </div>
    
    </div>
  );
};
Recipes.propTypes={
  handleWantToCook: PropTypes.func.isRequired
}
export default Recipes;