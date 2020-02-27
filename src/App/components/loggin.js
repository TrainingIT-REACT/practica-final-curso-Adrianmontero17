import React,{createRef} from "react";
import {loggin} from "../actions/user";
import {albums} from "../actions/albums";
import {songs} from "../actions/songs";
import { connect } from "react-redux";

import  "../css/forms.css";

const Loggin = ({loggin, albums, songs}) => {

  const input = createRef();

  const entrar = (e) => {
  loggin(input.current.value);

  fetch("http://localhost:3001/albums")
  .then((res) => {
    return res.json();
  })
  .then(json => {
    albums(json);
  });

  fetch("http://localhost:3001/songs")
  .then((res) => {
    return res.json();
  })
  .then(json => {
    songs(json);
  });
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
    user: state.user.user
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    loggin: (user) => dispatch(loggin(user)),
    albums: (albumsList) => dispatch(albums(albumsList)),
    songs: (songsList) => dispatch(songs(songsList))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loggin);
