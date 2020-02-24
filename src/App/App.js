import React from "react";
import Inicio from "./components/inicio.js";
import {Provider} from "react-redux";
import store from "./store";
// Css
import "./App.css";


const App = () => {

    return (
        <Provider store={store}>
        <div className="App">
          <Inicio/>
        </div>
        </Provider>
    );
  };



export default App;