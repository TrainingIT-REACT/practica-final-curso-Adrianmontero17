import React,{Fragment} from "react"
import { connect } from "react-redux";

import "../css/detalleAlbum.css";



const Reproductor = ({live}) =>{
    
    if(live === undefined || live === ""){
        return (
            <Fragment/>
        )
    }else{
        const song = require('../../../server/static'+live.audio);
        return (
            <Fragment>
                <div className="col-4">
                    <p className="col-12 reproductor">{live.name}</p>
                </div>
                <audio src={song.default} type="audio/mp3" controls autoPlay className="col-8 botton"/>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      live : state.songs.playSong
    };
}

export default connect(
    mapStateToProps
    )(Reproductor);