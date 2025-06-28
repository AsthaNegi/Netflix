import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () =>{

    const dispatch = useDispatch();

    const getPopularMovies = async()=>{

         const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

      try{
         const data = await fetch(url,API_OPTIONS);
         const movies = await data.json();

         dispatch(addPopularMovies(movies));

      }catch(error){
        console.log(error);
      }

    }

    useEffect(()=>{
        getPopularMovies();
    },[]);
      
     
}

export default usePopularMovies;









