import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

// fetching and storing upcoming moves in redux store 
const useUpcomingMovies = () =>{

    const dispatch = useDispatch();

    const getUpcomingMovies = () =>{
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
       
        fetch(url,API_OPTIONS)
        .then(data=>data.json())
        .then(movies=>dispatch(addUpcomingMovies(movies)))
        .catch((err)=>console.log(err))

 
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[]);

}

export default useUpcomingMovies;


 


