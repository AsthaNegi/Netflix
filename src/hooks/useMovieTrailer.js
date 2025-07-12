import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) =>{
    
    const dispatch = useDispatch();


    // fetching the trailer video and updating trailer video on the redux store 
    const getMovieVideos = async() =>{
        try{

           const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
            const data=await fetch(url,API_OPTIONS);
            // data is readable stream , convert that to json 
            const videos = await data.json();
           
            const trailer = videos?.results.find((video)=>{
                return video.name==="Official Trailer"
            })
                    
            // store teh trailer in redux store 
            dispatch(addTrailerVideo(trailer));
            
        }
        catch(err){
            console.error(err)
        }

    }

    useEffect(()=>{
         getMovieVideos();
    },[]);

}

export default useMovieTrailer;