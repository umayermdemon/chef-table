import PropTypes from "prop-types";
import Cook from "../Cook/Cook";

const Cooks = ({cooks, handleCurrentCook}) => {
  // console.log(cooks)
  return (
    <div className="w-2/5 border rounded-xl">
      <div className="my-4">
      <h1 className="text-2xl text-[#282828] font-medium text-center">Want to cook:{cooks.length} </h1>   
      <hr />   
      <div className="flex gap-14 ml-12 mt-4">
        <table>
            <tr>
            <td className="pl-2">Name</td>
            <td className="pl-14">Time</td>
            <td className="pl-24">Calories</td>
            </tr>
        </table>
      </div> 
      {
        cooks.map((cook,idx)=><Cook key={idx}
         idx={idx}
         cook={cook}
         handleCurrentCook={handleCurrentCook}
          >
        
        </Cook>)
      }
      </div>
      <div className="my-8">
      <h1 className="text-2xl text-[#282828] font-medium text-center">Currently cooking: </h1>   
      <hr />   
      <div className="flex gap-14 ml-12 mt-4">
      <table>
            <tr>
            <td className="pl-2">Name</td>
            <td className="pl-14">Time</td>
            <td className="pl-24">Calories</td>
            </tr>
      </table>
      </div>
    
      </div>

    </div>
  );
};

Cooks.propTypes={
  cooks: PropTypes.array.isRequired,
  handleCurrentCook: PropTypes.func.isRequired,
}

export default Cooks;