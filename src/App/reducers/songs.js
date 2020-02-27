import types from "../actions/types.js"
import { songs } from "../actions/songs.js";

const initialState = {
  list:"",
  favList:[]
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.GET_SONGS:{
      console.log("GET_SONGS: "+action.songs);
      return {
        ...state,
        list: action.songs.slice(0)
      };
    }
    case types.FAV_SONG:{
      if(state.favList.includes(action.song)){
        return {
          ...state
        }
      }else{
        return{
          ...state,
          favList: [
            ...state.favList,
            action.song
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