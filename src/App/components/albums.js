import React, {Fragment} from "react";
import ItemList from "./itemList";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";
import {addFav} from "../actions/albums";


const Albums = ({albumsList, addFav}) => {

  const fav = (album) => {
    console.log("PRUB ->" +album);
    addFav(album);
  }


  if(albumsList ==="" || albumsList===undefined){
    return (<Fragment>Cargando</Fragment>);
  }else{
    return(
      <Fragment>
        <div className="row col-12">
          <h1>Albums:</h1>
        </div>
        <div className="col-12 row">
          {albumsList.map((album,i) => (
            <div  className="itemList col-3"  onClick={(e) => fav(album)} key={album.id}>
              <NavLink to={"/detalleAlbum/" + album.id} key={album.id} >
                <ItemList key={album.id} name1={album.name} name2={album.artist}/>
              </NavLink>
            </div>
            ))}
        </div>
      </Fragment>	
    );
  }
  

}

const mapStateToProps = (state) => {
  return {
    albumsList: state.albums.list
  };
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addFav: (album) => dispatch(addFav(album))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
