import types from "../actions/types.js"

const initialState = {
  user:""
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOGGIN:{
      return {
        ...state,
        user: action.user
      };
    }
    default:{
      return state;
    }
  }
}

export default reducer;