import {useState} from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignInForm,setIsSignInForm] = useState(true);


    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg" alt="" />
            </div>
            <form className="bg-black/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12   text-white p-4">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign up"}</h1>
                {!isSignInForm&&<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" />}
                <input type="text" placeholder="Email or mobile number" className="p-4 my-4 w-full bg-gray-900" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900" />
                <button className="bg-red-600 p-4 my-6 w-full rounded-lg">{isSignInForm?"Sign In":"Sign up"}</button>
                <p className="py-4" onClick={toggleSignInForm}>{isSignInForm?"New to netflix? Sign up now":"Already a user ? Sign in"}</p>
            </form>
        
        </div>
    );
}

export default Login;