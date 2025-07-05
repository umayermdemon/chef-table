import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import Current from "../Current/Current";

const Cooks = ({cooks, handleCurrentCook, currentlyCook}) => {
  return (
    <div className="w-full lg:w-2/5 border rounded-xl h-auto">
      <div className="my-4">
      <h1 className="text-xl lg:text-2xl text-[#282828] font-medium text-center">Want to cook:{cooks.length} </h1>   
      <hr />   
      <div className="flex ml-2 lg:ml-12 mt-4">
        <table>
            <tr>
            <td className="pl-8 lg:px-2">Name</td>
            <td className="pl-8 lg:pl-16">Time</td>
            <td className="pl-8 lg:pl-16">Calories</td>
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
      <h1 className="text-xl lg:text-2xl text-[#282828] font-medium text-center">Currently cooking: {currentlyCook.length}</h1>   
      <hr />   
      <div className="flex gap-14 ml-12 mt-4">
      <table>
            <tr>
            <td className="pl-0 lg:pl-2">Name</td>
            <td className="pl-24 lg:pl-40">Time</td>
            <td className="pl-16 lg:pl-16">Calories</td>
            </tr>
      </table>
      </div>
      
      {
        currentlyCook.map((currentCook, idx)=><Current key={idx} idx={idx} currentCook={currentCook}></Current>)
      }
      </div>

    </div>
  );
};

Cooks.propTypes={
  cooks: PropTypes.array.isRequired,
  handleCurrentCook: PropTypes.func.isRequired,
  currentlyCook: PropTypes.object
}

export default Cooks;