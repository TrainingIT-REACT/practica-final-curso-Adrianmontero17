import React,{Fragment} from "react";
import { connect } from "react-redux";
import {addFav,playSong} from "../actions/songs";
import {IconHeartS,IconHeartN} from "./heartIcon";
//import img from '!!file-loader!../../../server/static/images/cover.jpg';

import "../css/detalleAlbum.css";

const DetalleAlbum = ({ match, albumsList, songsList,songsFavList,addFav }) => {

  const fav = (song) =>{
    addFav(song);
  }

  const play = (song) =>{
    playSong("");
    playSong(song);
  }

  const favIcon = (song) =>{
    if(songsFavList.includes(song)){
      return <IconHeartN/>
    }else{
      return <IconHeartS/>
    }
  }  


  if(albumsList === undefined || albumsList === "" || songsList === undefined || songsList ===""){
      return <Fragment></Fragment>
  }else{
      let album = albumsList.filter(item => item.id == match.params.id);
      let songs = songsList.filter(item => item.album_id == match.params.id);
      const img = require('../../../server/static'+album[0].cover); 
      
      return (
        <Fragment> 
        <div className="row col-12 info">
          <div className="col-4">
              <img src={img.default} className="cover"/>
          </div>
          <div className="col-8 title">
            <h1 align="left">{album[0].name}</h1>
            <h2 align="left">{album[0].artist}</h2>
          </div>
        </div>
        <div className="row col-12">
          <div className="row col-11 header">
            <div className="col-1">
              #
            </div>
            <div className="col-9">
              Título
            </div>
            <div className="col-2">
              Segundos
            </div>     
          </div> 
          
          {songs.map((song,i) => (
            <div key={song.id} className="row col-11 song" onDoubleClick={(e) => play(song)}>
              <div className="col-1" onClick={(e) => fav(song)}>
                {favIcon(song)}
              </div>
              <div className="col-9">
                {song.name}
              </div>
              <div className="col-2">
                {song.seconds}
              </div>     
            </div> 
            ))}
        </div>
      </Fragment>
      )
}   }

const mapStateToProps = (state) => {
    return {
      albumsList: state.albums.list,
      songsList: state.songs.list,
      songsFavList: state.songs.favList
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
)(DetalleAlbum);