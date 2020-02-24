import React from "react";
import { connect } from "react-redux";
//import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

//CSS
import "../css/menu.css";

//const onClick = (e) => {

//}

const menu = ({ user }) => {
  return (
    <div class="vertical-menu">
      <a href="#" className="active">
        {user}
      </a>
      <a href="#" onClick="">
        Álbums
      </a>
      <a href="#" onClick="">
        Canciones
      </a>
      <a href="#" onClick="">
        Artistas
      </a>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(menu);
