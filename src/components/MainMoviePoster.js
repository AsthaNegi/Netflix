import { IMG_CDN_URL } from "../utils/constants";

const MainMoviePoster = ({posterPath}) =>{
    return(
        <div className="w-screen aspect-video overflow-hidden">
            {posterPath&&(<img className="w-full h-full object-cover"src={IMG_CDN_URL+posterPath} alt="main movie poster" />)}
            
        </div>
    );
}

export default MainMoviePoster;