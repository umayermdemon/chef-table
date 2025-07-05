
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleWantToCook, recipes}) => {
  return (
    <div className="w-3/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
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
  handleWantToCook: PropTypes.func.isRequired, 
  recipes: PropTypes.array.isRequired,
}
export default Recipes;