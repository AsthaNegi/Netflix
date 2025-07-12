import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MainMoviePoster from "./MainMoviePoster";

const MainContainer = () =>{

    const movies = useSelector(store=>store?.movies?.nowPlayingMovies?.results);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log("mainmovie :",mainMovie);
    const {id, original_title,overview,poster_path} = mainMovie;


    return(
        <div className="relative">
            <VideoTitle title={original_title} overview={overview}/> 
            <VideoBackground movieId={id}/>
        </div>
    );
}

export default MainContainer;