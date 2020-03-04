import React from "react";
import Portada from "./portada";
import { connect } from "react-redux";
import AreaInterna from "./areaInterna";



const Inicio = ({ user }) => {
  if (user === "" || user === undefined) {
    return <Portada> </Portada>;
  } else {
    return <AreaInterna />;
  }
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Inicio);
