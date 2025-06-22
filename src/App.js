import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const heading = React.createElement("h1",{},"Hello React");



const App = () =>{   
    return(
      <Provider store={appStore}>
         
            <Body/>
        
      </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);


