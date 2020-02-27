import React,{Fragment} from "react";

//CSS
import "../css/itemList.css";


const ItemList = ({name1,name2}) => {
  return (
    <Fragment >
      <h1>{name1}</h1>
      <h2>{name2}</h2>
    </Fragment>
  );

}


export default ItemList;