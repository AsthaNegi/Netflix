import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) =>{
   
    return(
        <div className="w-40 flex-shrink-0 mr-2 mt-4 ">
           <img className="w-full rounded-md" src={IMG_CDN_URL+posterPath} alt="poster img" />
        </div>
    );
}

export default MovieCard;