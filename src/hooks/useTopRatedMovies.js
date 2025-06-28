import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies =() =>{

    const dispatch = useDispatch();

  const getTopRatedMovies = async() =>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

    try{
         const data = await fetch(url,API_OPTIONS);
         const movies = await data.json();
         dispatch(addTopRatedMovies(movies));

    }
    catch(error){
        console.log(error);

    }

  }
  
  useEffect(()=>{
    getTopRatedMovies()
  },[]);

}

export default useTopRatedMovies;




