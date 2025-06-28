import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryContainer = () =>{

    const movies = useSelector(store=>store.movies); 
    // console.log("movies",movies);


    return(
        <div className="bg-[#141414] text-white">
            <div className=" -mt-30 relative z-10">
                <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies?.results}/>
                <MovieList title={"Popular"} movies={movies?.popularMovies?.results}/>
                <MovieList title={"Top rated"} movies={movies?.topRatedMovies?.results}/>
                <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies?.results}/>
                
            </div>
        </div>
    );
}

export default SecondaryContainer;

{/*
  
    - MovieList : Now Playing 
       - MovieCard *n 
    - MovieList : Trending 
       - MovieCard *n 
    - MovieList : Comedy 
       - MovieCard *n 
    
    
*/}