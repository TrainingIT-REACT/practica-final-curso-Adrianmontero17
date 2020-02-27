import React,{Fragment} from "react";
import { connect } from "react-redux";

import "../css/detalleAlbum.css";

const DetalleAlbum = ({ match, albumsList, songsList }) => {
    
    if(albumsList === undefined || albumsList === "" || songsList === undefined || songsList ===""){
        return <Fragment></Fragment>
    }else{
        let album = albumsList.filter(item => item.id == match.params.id);
        let songs = songsList.filter(item => item.album_id == match.params.id);

        return (
         <Fragment> 
          <div className="row col-12 info">
            <div className="col-4">
                <img src={require('../../../server/static'+album[0].cover)} className="cover"/>
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
              <div key={song.id} className="row col-11 song">
                <div className="col-1">
                  {song.id}
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
      songsList: state.songs.list
    };
  }

export default connect(
mapStateToProps
)(DetalleAlbum);