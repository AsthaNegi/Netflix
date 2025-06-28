import { IMG_CDN_URL } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) =>{
    
    return(
        <div>
        <div className="pl-12 py-8">   
               <h1 className="font-bold text-xl">{title}</h1>              
                    <div className="flex overflow-x-scroll flex-nowrap ">
                        {movies?.map((movie)=><MovieCard key={movie.id}posterPath={movie.poster_path}/>)
                        }                       
                    </div>          
        </div>
        </div>
    );
}

export default MovieList;



// scrolling through Arrow overlays 
// {/* <div className="relative pl-12 pt-10">
//   <h1 className="text-xl font-bold mb-4">{title}</h1>

//   <div className="relative">
//     {/* Gradient overlays */}
//     <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white z-10"></div>
//     <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white z-10"></div>

//     {/* Scrollable list */}
//     <div className="flex overflow-x-scroll flex-nowrap scroll-hidden space-x-4 pr-12">
//       {movies?.map((movie) => (
//         <MovieCard key={movie.id} posterPath={movie.poster_path} />
//       ))}
//     </div>
//   </div>
// </div> */}
