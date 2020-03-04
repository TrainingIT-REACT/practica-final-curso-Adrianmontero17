import types from "../actions/types.js"
import { songs } from "../actions/songs.js";

const initialState = {
  list:"",
  favList:[],
  playSong:""
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.GET_SONGS:{
      return {
        ...state,
        list: action.songs.slice(0)
      };
    }
    case types.FAV_SONG:{
      if(state.favList.includes(action.song)){
        var index = state.favList.indexOf(action.song);
        var array = state.favList.splice(0);
        array.splice(index,1);
        return {
          ...state,
          favList: array
          
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
    case types.PLAY_SONG:{

      return{
        ...state,
        playSong: action.song
      }
    }
    default:{
      return state;
    }
  }
}

export default reducer;