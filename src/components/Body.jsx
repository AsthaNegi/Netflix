
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { useDispatch } from "react-redux";



const Body = () =>{

    const dispatch = useDispatch();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path : "/browse",
            element:<Browse/>
        },
        {
            path:"/error",
            element:<Error/>

        }
      ],{
     future: {
        v7_startTransition: true, // ✅ opt in to new behavior
            },
     });


    return(
        <div>
            <RouterProvider router ={appRouter}/>
        </div>
    );
}

export default Body;