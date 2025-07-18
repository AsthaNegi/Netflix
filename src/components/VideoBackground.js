import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const VideoBackground = ({movieId}) =>{

    const trailerVideo =useSelector(store=>store.movies?.trailerVideo);
    // fetching the movie trailer data 
   
    useMovieTrailer(movieId);
   
 
    return(
        <div className="w-screen">
            <iframe className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&si=sqdsVxIKIFQnW20r`} title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    );
}

export default VideoBackground;


