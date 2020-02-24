import React from "react";
import Menu from "./menu";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ItemList from "./itemList";
import Albums from "./albums";

//CSS
import "bootstrap/dist/css/bootstrap.min.css"; 


const areaInterna = () =>{

  return(
    
    <Router>
      <div className="row">
        <div className="col-2 left">
          <Menu/>
        </div>
        <div className="col-10 ">
          <Albums/>
        </div>
      </div>
    </Router>
  )
}

export default areaInterna;