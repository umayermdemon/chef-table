import PropTypes from "prop-types";
import time from '../../assets/Images/time.png';
import caloriesImg from '../../assets/Images/calories.png'

const Recipe = ({ recipe,handleWantToCook }) => {
  const { name, image, description, ingredients, preparing_time, calories}=recipe
  return (
    <div >
      <div className="card border border-[#28282833] bg-base-100 ">
        <figure className="px-4 pt-6">
          <img
            src={image}
            alt={name}
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body  text-left">
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="text-[#878787] text-sm">{description}</p>
          <hr />
          <p className="text-[#282828]">Ingredients: {ingredients.length}</p>
            {
              ingredients.map((item, idx)=><ul key={idx} className="list-disc ml-6">
                <li className="text-[#878787] text-sm">{item}</li>
                </ul>)
            }
          <hr />
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <img src={time} alt=""  className="w-5"/>
              <p className="text-[#282828CC] text-sm">{preparing_time}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={caloriesImg} alt="" className="w-5"/>
              <p className="text-[#282828CC] text-sm">{calories}</p>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleWantToCook(recipe)} className="btn bg-[#0BE58A] rounded-full hover:btn-outline hover:text-white">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipe;
