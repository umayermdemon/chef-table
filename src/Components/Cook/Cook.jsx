import PropTypes from "prop-types";

const Cook = ({cook, idx}) => {
  const {name, preparing_time, calories }=cook
  return (
    <div >
     
      <div className="flex gap-6 mt-4 bg-gray-200 rounded-xl items-center p-2 mx-2">
      <h2 className="ml-4">{idx+1}</h2>
        <h2>{name}</h2>
        <h2 >{preparing_time}minutes</h2>
        <h2>{calories} </h2>
        <button className="btn bg-[#0BE58A] rounded-full hover:btn-outline hover:text-white">Preparing</button>
      </div>
         
      </div> 
  );
};

Cook.propTypes={
  cook: PropTypes.object.isRequired,
  idx: PropTypes.number
}

export default Cook;