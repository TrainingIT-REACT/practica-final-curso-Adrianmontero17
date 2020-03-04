import React, { Fragment } from "react";
import { connect } from "react-redux";
import {addFav,playSong} from "../actions/songs";
import {IconHeartS,IconHeartN} from "./heartIcon";

//CSS
import "../css/canciones.css";



const Canciones = ({songsList,addFav,favList,playSong}) =>{
    const fav = (song) =>{
      addFav(song);
    }
    const play = (song) =>{
      playSong("");
      playSong(song);
    }

    const favIcon = (song) =>{
      if(favList.includes(song)){
        return <IconHeartN/>
      }else{
        return <IconHeartS/>
      }
    }
    if(songsList === undefined || songsList.length === 0){
      return (
        <Fragment/>
      )
    }else{
      return(
          <div className="row col-12 ">
              <div className="row col-11 header">
                <div className="col-8">
                  Título
                </div>
                <div className="col-2">
                  Segundos
                </div>
                <div className="col-1">
                    #
                </div>
              </div> 
              <div className="col-12 row list scroller">
                {songsList.map((song,i) => (
                  <div key={song.id} className="row col-11 song" onDoubleClick={(e) => play(song)}>
                    <div className="col-9">
                      {song.name}
                    </div>
                    <div className="col-2">
                      {song.seconds}
                    </div>
                    <div className="col-1" onClick={(e) => fav(song)}>
                      {favIcon(song)}
                    </div>     
                  </div> 
                  ))}
              </div> 
            </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      songsList: state.songs.list,
      favList: state.songs.favList
    };
  }
const mapDispatchToProps = (dispatch) =>{
  return {
    addFav: (song) => dispatch(addFav(song)),
    playSong: (song) => dispatch(playSong(song))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Canciones);