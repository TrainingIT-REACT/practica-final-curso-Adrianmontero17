import React from "react";
import Menu from "./menu";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Albums  from "./albums";
import DetalleAlbum from "./detalleAlbum";
import ItemList from "./itemList";
import Favoritos from "./favoritos";
import Canciones from "./canciones";

//CSS
import "bootstrap/dist/css/bootstrap.min.css"; 

//const AlbumsArea = React.lazy(() => import('./albums'));

const areaInterna = () =>{

  return(
    
    <Router>
      <div className="row">
        <div className="col-2 left">
          <Menu/>
        </div>
        <div className="col-10 row">
          <React.Suspense fallback="Cargando Albuns">
            <Route path="/albums" exact component={Albums} />
            <Route path="/detalleAlbum/:id"  component={DetalleAlbum} />
            <Route path="/" exact component={Favoritos} />
            <Route path="/canciones" exact component={Canciones} /> 
          </React.Suspense>
        </div>
        
      </div>
    </Router>
  )
}

export default areaInterna;