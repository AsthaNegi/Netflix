import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
  const dispatch = useDispatch();


    const getNowPlayingMovies = () =>{  
        // fetching the nowPlayingMovies data and updating teh store    
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        
        fetch(url,API_OPTIONS)
        .then(res => res.json())
        .then(json => {
           
            // json contains all teh now Playing movies 
            dispatch(addNowPlayingMovies(json));
        })
        .catch(err => console.error(err));
    }

    useEffect(()=>{
      getNowPlayingMovies();  
    },[]);

}

export default useNowPlayingMovies;