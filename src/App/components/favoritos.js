import React from "react";
import { connect } from "react-redux";
import ItemList from "./itemList";
import { NavLink} from "react-router-dom";

import "../css/favoritos.css";



const Favoritos = ({favList,songsList}) => {

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
    
    return (
        <div className="col-12">
            <h1>Favoritos</h1>
            <div className="row col-12">
                <div className="row col-12">
                <h1>Albums:</h1>
                </div>
                <div className="row col-12 favsAlbum">
                    { (favList && favList.length > 0)?
                        <div className="row">
                            <div className="row col-12 header">
                                <div className="col-5">
                                    Nombre
                                </div>
                                <div className="col-2">
                                    Artista
                                </div>
                                <div className="col-5">
                                    Duración
                                </div>       
                            </div> 
                            {favList.map((album,i) => (
                                <NavLink to={"/detalleAlbum/" + album.id} key={album.id} className="col-12">
                                    <div key={album.id} className="row col-12 item">
                                        <div className="col-5">
                                            {album.name}
                                        </div>
                                        <div className="col-2">
                                            {album.artist}
                                        </div>
                                        <div className="col-5">
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favList: state.albums.favList,
        songsList: state.songs.list
    };
}

export default connect(
    mapStateToProps
  )(Favoritos);


