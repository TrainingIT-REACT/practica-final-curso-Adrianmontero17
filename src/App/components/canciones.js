import React from "react";
import { connect } from "react-redux";
import {addFav} from "../actions/songs";
import {IconHeartS,IconHeartN} from "./heartIcon";

//CSS
import "../css/canciones.css";



const Canciones = ({songsList,addFav}) =>{
    const fav = (song) =>{
            
    }

    return(
        <div className="row col-12 ">
            <div className="row col-11 header">
              <div className="col-9">
                Título
              </div>
              <div className="col-2">
                Segundos
              </div>
              <div className="col-1">
                  #
              </div>
            </div> 
            
            {songsList.map((song,i) => (
              <div key={song.id} className="row col-11 song">
                <div className="col-9">
                  {song.name}
                </div>
                <div className="col-2">
                  {song.seconds}
                </div>
                <div className="col-1" onClick={fav(song)}>
                  <IconHeartS/>
                </div>     
              </div> 
              ))}
          </div>
    );
}

const mapStateToProps = (state) => {
    return {
      songsList: state.songs.list
    };
  }
  const mapDispatchToProps = (dispatch) =>{
    return {
      addFav: (song) => dispatch(addFav(song))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Canciones);