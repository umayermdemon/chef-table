import PropTypes from "prop-types";

const Cook = ({cook, idx}) => {
  const {name, preparing_time, calories }=cook
  return (
    <div >
    <div className="flex gap-6 mt-4 bg-gray-200 rounded-xl items-center p-2 mx-2">
      <table>
        <tr>
          <td className="px-4">{idx+1}</td>
          <td>{name}</td>
          <td className="px-4">{preparing_time}minutes</td>
          <td className="px-4">{calories}</td>
          <td><button className="btn bg-[#0BE58A] rounded-full hover:btn-outline hover:text-white">Preparing</button></td>
        </tr>
      </table>
      </div>
         
      </div> 
  );
};

Cook.propTypes={
  cook: PropTypes.object.isRequired,
  idx: PropTypes.number
}

export default Cook;