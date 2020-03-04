import React from "react";
import { connect } from "react-redux";
import ItemList from "./itemList";
import { NavLink} from "react-router-dom";
import {playSong} from "../actions/songs";

import "../css/favoritos.css";



const Favoritos = ({favList,songsList,songFavList,albumList,playSong}) => {

    const play = (song) =>{
        playSong("");
        playSong(song); 
    }

    const getDuration = (album) => {
        
        var time = 0;
        songsList.map((song,i) =>{
            if(song.album_id == album){
                time = time + parseInt(song.seconds);
            }
        })
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        return minutes+"' "+seconds+'"'
    }

    const getArtist = (song) => {
        var album = albumList.filter(album => album.id == song.album_id);
        return album[0].artist
    }
    
    return (
        <div className="col-12">
            <h1>Favoritos</h1>
            <div className="row col-12">
                <div className="row col-12">
                <h1>Albums:</h1>
                </div>
                <div className="row col-12 favsAlbum scroller">
                    { (favList && favList.length > 0)?
                        <div className="row">
                            <div className="row col-12 header">
                                <div className="col-5">
                                    Nombre
                                </div>
                                <div className="col-4">
                                    Artista
                                </div>
                                <div className="col-3">
                                    Duración
                                </div>       
                            </div> 
                            {favList.map((album,i) => (
                                <NavLink to={"/detalleAlbum/" + album.id} key={album.id} className="col-12">
                                    <div key={album.id} className="row col-12 item">
                                        <div className="col-5">
                                            {album.name}
                                        </div>
                                        <div className="col-4">
                                            {album.artist}
                                        </div>
                                        <div className="col-3">
                                            {getDuration(album.id)}
                                        </div>     
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    :null  
                    }
                </div>

            </div>
            <div className="row col-12">
                <div className="row col-12">
                <h1>Canciones:</h1>
                </div>
                <div className="row col-12 favsAlbum scroller">
                    { (songFavList && songFavList.length > 0)?
                        <div className="row">
                            <div className="row col-12 header">
                                <div className="col-5">
                                    Nombre
                                </div>
                                <div className="col-5">
                                    Artista
                                </div>
                                <div className="col-2">
                                    Duración
                                </div>       
                            </div> 
                            {songFavList.map((song,i) => (
                                <div key={song.id} className="row col-12 item" onDoubleClick={(e) => play(song)}>
                                    <div className="col-5">
                                        {song.name}
                                    </div>
                                    <div className="col-5">
                                        {getArtist(song)}
                                    </div>
                                    <div className="col-2">
                                        {song.seconds}"
                                    </div>     
                                </div>
                            ))}
                        </div>
                    :null  
                    }
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favList: state.albums.favList,
        songsList: state.songs.list,
        songFavList: state.songs.favList,
        albumList: state.albums.list
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
      playSong: (song) => dispatch(playSong(song))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favoritos);


