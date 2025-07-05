import PropTypes from "prop-types";

const Cook = ({cook, idx, handleCurrentCook}) => {
  const {name, preparing_time, calories }=cook
  return (
    <div >
    <div className="flex  gap-6 mt-4 bg-gray-200 rounded-xl items-center p-2 mx-2">
      <table>
        <tr>
          <td className="px-2 lg:px-4 text-sm lg:text-base">{idx+1}</td>
          <td className="text-sm lg:text-base">{name}</td>
          <td className="px-2 lg:px-4 text-sm lg:text-base">{preparing_time}</td>
          <td className="px-2 lg:px-4 text-sm lg:text-base">{calories}</td>
          <td><button onClick={()=>handleCurrentCook(cook)}  className="btn bg-[#0BE58A] rounded-full hover:btn-outline hover:text-white">Preparing</button></td>
        </tr>
      </table>
      </div>
      </div> 
  );
};

Cook.propTypes={
  cook: PropTypes.object.isRequired,
  idx: PropTypes.number,
  handleCurrentCook: PropTypes.func
 
}

export default Cook;