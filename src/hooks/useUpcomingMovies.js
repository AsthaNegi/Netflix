import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

// fetching and storing upcoming moves in redux store 
const useUpcomingMovies = () =>{


    const dispatch = useDispatch();  

    const getUpcomingMovies = async() =>{
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
       
       try{

         const data = await fetch(url,API_OPTIONS);
         console.log("U data",data);
         const movies= await data.json();
         console.log("U movies:",movies);
         dispatch(addUpcomingMovies(movies));

       }
       catch(err){
        console.log(err);
       } 
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[]);

}

export default useUpcomingMovies;




// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));


 


