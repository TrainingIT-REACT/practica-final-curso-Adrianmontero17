import types from "../actions/types.js"

const initialState = {
  list:"",
  favList:[]
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.GET_ALBUMS:{
      console.log("albumsReducer " + action.albums);
      return {
        ...state,
        list: action.albums.slice(0)
      };
    }
    case types.FAV_ALBUM:{
      console.log("FAV -> "+state.favList.filter(album => album.id === action.album.id));
      if(state.favList.includes(action.album)){
        return {
          ...state
        }
      }else{
        return{
          ...state,
          favList: [
            ...state.favList,
            action.album
          ]
        }
      }
    }
    default:{
      return state;
    }
  }
}

export default reducer;