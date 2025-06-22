import {useState,useRef} from "react";
import { checkValidData} from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from "react-redux";
import {auth} from "../utils/firebase.js";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice.js";
import { defaultUserProfile } from "../utils/constants.js";


const Login = () =>{
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const dispatch = useDispatch();
                  
    const name = useRef(null);
    const email = useRef(null);
    const password =useRef(null);


    const handleButtonClick = () =>{
        // validate the form data first 
       const message = checkValidData(email.current.value,password.current.value);
       setErrorMessage(message);

       if(message) return; // some error was there 


       if(!isSignInForm){
         // sign up logic 
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
           // Signed up 
            const user = userCredential.user;
            console.log("Signed up user : ",user);// new user is created
            
                // // after user is signed up , update user details 
                 updateProfile(user, {
                displayName: name.current.value, photoURL:defaultUserProfile
                })
                .then(async () => {
                // // Refresh user to get updated profile
                // await user.reload(); // ✅ this ensures the latest data is fetched
                // Now reload the user to get updated values
                // await user.reload();
                const updatedUser = auth.currentUser;

                const { uid, email, displayName, photoURL } = updatedUser;
                // update the store with updated user value 
                 dispatch(addUser({ uid, email, displayName, photoURL }));
                 
                
                })
                .catch((error) => {
                // An error occurred
                  setErrorMessage(error.message);
                });  

            
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" "+errorMessage);
        });
       }
       else{
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Signed in user :",user);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             setErrorMessage(errorCode+" "+errorMessage);
        });

       }

    }


    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg" alt="" />
            </div>
            <form onSubmit={(e)=>{e.preventDefault();}} className="bg-black/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12   text-white p-4">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign up"}</h1>
                {!isSignInForm&&<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" ref={name}/>}
                <input type="text" placeholder="Email or mobile number" ref ={email} className="p-4 my-4 w-full bg-gray-900" />
                <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-gray-900" />
                <p className="text-red-600 font-bold text-md py-1">{errorMessage}</p>
                <button className="bg-red-600 p-4 my-6 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to netflix? Sign up now":"Already a user ? Sign in"}</p>
            </form>
        
        </div>
    );
}

export default Login;