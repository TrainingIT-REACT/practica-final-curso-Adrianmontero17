import React,{createRef} from "react";
import {loggin} from "../actions/user";
import { connect } from "react-redux";

import  "../css/forms.css";

const Loggin = ({loggin}) => {

  const input = createRef();

  const entrar = e => {
    loggin(input.current.value);
    //console.log(store.getState().user);
  }

  
  return (
  <div className="form-style-8">
    <h2>Login</h2>
  <form>
    <input id="nombre" ref={input} type="text" className="field1" placeholder="Nombre"/>    
    <button onClick={entrar} className="center button-secondary">
          Entrar
        </button>
  </form>
  </div>
  );
  
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    loggin: (user) => dispatch(loggin(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loggin);
