import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"Hello React");

const App = () =>{
    return(
      <div className="text-3xl">
         App component
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);


