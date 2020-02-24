import React from "react";
import Portada from "./portada";
import { connect } from "react-redux";
import AreaInterna from "./areaInterna";

const inicio = ({ user }) => {
  if (user === "") {
    return <Portada> </Portada>;
  } else {
    return <AreaInterna />;
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(inicio);
