import { useEffect } from "react";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";



const Header = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=> store.user);
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
     


    // Header is present in every component so auth state will be checked with each component rendering 
    useEffect(()=>{
        
        // we are updating the store with every sign in , sign out of user 
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                  await user.reload(); // reloading component to update the user updated values 
                const {uid,email,displayName,photoURL} = user;
                // as sson as user sign in , add teh user details to the store 
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})); 
                // ...
                navigate("/browse"); // on sign in navigate to <Browse/>
            } else {
                // User is signed out
                // remove user details from teh store 
                dispatch(removeUser());
                navigate("/");// on signout navigate to <Login/>   
            }
        });
        // unsubscibe when the component unmounts 
        return () => unsubscribe();
    },[]);
    
    const handleSignout = () =>{
       
           // signing out user 
            signOut(auth).then(() => {
            // Sign-out successful.
              
            }).catch((error) => {
            // An error happened.
               navigate("/error");
            });
    }

    const handleGptSearchClick=() =>{
      // changing value of showGptSearch in redux store
      dispatch(toggleGptSearchView());
    }

    // if(!user) return null;
    return (     
      <div className="fixed  top-0 left-0 z-10 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
        <img
          className="w-56"
          src={LOGO}
          alt="Netflix Logo"
        />
        {user&&
          <div className="flex p-2 items-center">
              <button className="bg-red-700 w-30 hover:cursor-pointer hover:hover:bg-red-500 text-white font-bold p-2 rounded-md m-3 " onClick={handleGptSearchClick}>{showGptSearch?"Home":"GPT Search"}</button>
              <img
                className="w-10 h-10 m-2 rounded"
                src={user?.photoURL}
                alt="user-profile"
              />
              <button
                onClick={handleSignout}
                className="font-bold text-white cursor-pointer"
              >
                Sign out
               </button>
          </div>
        }
      </div>
  );
}

export default Header;