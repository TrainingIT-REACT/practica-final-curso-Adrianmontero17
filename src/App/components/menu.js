import React from "react";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";

//CSS
import "../css/menu.css";


const menu = ({ user }) => {
  return (
    <div className="vertical-menu">
      <NavLink exact to="/" activeClassName="active" >
        {user}
      </NavLink>
      <NavLink to="/albums" activeClassName="active">
        Álbums
      </NavLink>
      <NavLink to="/canciones" activeClassName="active" >
        Canciones
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(menu);
