
# Netflix GPT 

- Create React App
- Configured TailwindCSS
- Header 
- Routing of App 
- Login Form 
- Sign up form 
- Form Validation 
- useRef Hook 
- Firebase setup 
- Deploying our app to the production 
- Create sign up user account using firebase
- implement Sign in user Api using firebase
- created redux store with userSlice
- Implemented Sign out 
- Update profile using redux and firebase apis 
- BugFix : Sign up user displayName and photoURL update 
- BugFix : if the user is not logged in , browse to Login Page and vice versa (Private routing using onAuthStateChanged firebase api )
- unsubscibe to onAuthStateChanged when the component unmounts  
- Fetch data from TMDB Movies api
-Add hardcoded values in the utils/constants.js
- Register TMDB API & create an app & get access token 
- get data from teh TMDB now playing movies list API 
- custom hook for now playing movies 
- create movieSlice 
- update store with movies data 
- Planning for Main container and secondary container 
- fetch data for trailer video 
- update store with trailer video data 
- embedded the youtube video and make it autoplay and mute 
- tailwind classes to make maincontainer look awesome 
--> In secondary container made <MovieList/> and <MovieCard/>
-- Made the <MovieList/> scrollable 
-- used TMDB image Cdn url 
-- Designed the cards 
-- Made the first <MovieList/> sit on top of (half of <MainContainer/> and <secondaryContainer/>) keeping the  trasparent background using -margin
-- Made the custom hook for all the other movies types like popular , top rated upcoming etc to fetch movies from api and store them in redux store  
-- created .env file and stored all the api keys there , added .env in the .gitignore 
-- Also updated src/utils/firebase.js to load all Firebase config values (API key, project ID, etc.) from environment variables defined in the .env file.




-Login/signup
   -Sign in/ sign up page 
   -redirect to browse page 
-Browse page (after authentication)
   -Header
   -Main movie 
     -Trailer in backgroud 
     -Title & description 
     -Movie suggestions 
       -Movie List 
-NetflixGPT 
   -Search bar 
   -Movie suggestions 

   