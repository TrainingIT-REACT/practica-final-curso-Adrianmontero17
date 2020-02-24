import React, {Fragment} from "react";
import ItemList from "./itemList";

let listaAlbun ;

fetch("http://localhost:3001/albums")
.then((res) => {res.json()})
.then((json => listaAlbun = json))

console.log(listaAlbun);
const Albums = () => {

  return(
      <Fragment>
        {listaAlbun.map((album,i) => (
          <ItemList name1={album.name} name2={album.artist}/>
        ))}
      </Fragment>
  );

}


export default Albums;