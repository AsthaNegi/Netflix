import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

const heading = React.createElement("h1",{},"Hello React");



const App = () =>{
    return(
      <div className="">
         <Body/>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);


