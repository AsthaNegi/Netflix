const VideoTitle = ({title,overview}) =>{
    return(
        <div className=" absolute w-screen aspect-video pt-[20%] pb-[10%] px-18 text-white bg-gradient-to-r from-black ">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
             <div className="">
                <button className="mx-2 bg-white text-black  p-4 px-12 text-xl rounded-lg hover:bg-white/70">
                     ▶ Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50">More Info</button>
             </div>
            
        </div>
    );
}

export default VideoTitle;