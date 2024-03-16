import PropTypes from "prop-types";
import Cook from "../Cook/Cook";

const Cooks = ({cooks}) => {
  
  return (
    <div className="w-2/5 border rounded-xl">
      <div className="my-4">
      <h1 className="text-2xl text-[#282828] font-medium text-center">Want to cook:{cooks.length} </h1>   
      <hr />   
      <div className="flex gap-14 ml-12 mt-4">
          <h2>Name</h2>
          <h2 className="pl-8">Time</h2>
          <h2 className="pl-8">Calories</h2>
      </div> 
      {
        cooks.map((cook,idx)=><Cook key={idx} idx={idx} cook={cook}>
        
        </Cook>)
      }
      </div>
      <div className="my-8">
      <h1 className="text-2xl text-[#282828] font-medium text-center">Currently cooking:  </h1>   
      <hr />   
      <div className="flex gap-14 ml-12 mt-4">
          <h2>Name</h2>
          <h2 className="pl-8">Time</h2>
          <h2>Calories</h2>
      </div> 
      </div>

    </div>
  );
};

Cooks.propTypes={
  cooks: PropTypes.array.isRequired,
}

export default Cooks;