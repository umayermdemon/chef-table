import PropTypes from "prop-types";

const Current = ({currentCook, idx}) => {
  const {name, preparing_time, calories }=currentCook
  return (
    <div>
     <div  className="flex gap-6 mt-4 bg-gray-200 rounded-xl items-center p-2 mx-2">
     <table>
        <tr>
          <td className="px-4">{idx+1}</td>
          <td className="w-40">{name}</td>
          <td className="pl-8">{preparing_time}</td>
          <td className="pl-8">{calories}</td>
        </tr>
      </table>
     </div>
      
      </div>
  );
};

Current.propTypes={
  currentCook: PropTypes.object.isRequired,
  idx: PropTypes.number,
}

export default Current;

