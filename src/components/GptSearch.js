import { BG_URL } from "../utils/constants";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";




const GptSearch = () =>{
  return(
     <div className="relative text-white min-h-screen">
         <div className=" fixed top-0 left-0 w-full h-full -z-10">
           <img src={BG_URL} alt="background" className="w-full h-full object-cover" />
         </div>
          <div className="pt-20 px-4 ">
             <GptSearchBar/>      
            <GptMoviesSuggestions/>
          </div>
     </div>
  );  
}


export default GptSearch;


