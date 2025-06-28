import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";



const Browse = () =>{   
    // calling teh custom hook to fetch NowPlayingMovies  and store them in redux store   
        useNowPlayingMovies(); 
        usePopularMovies();
        useTopRatedMovies();
        useUpcomingMovies();

    return(
        <div>
             <Header/>
             <MainContainer/>
             <SecondaryContainer/>
             {/*
                MainContainer
                   - videoBackground
                   -videoTitle
                secondaryContainer
                    - MovieList *n 
                       - cards *n  
             */}
             
        </div>
    );
}

export default Browse;