import types from "../actions/types.js"

const initialState = {
  user:""
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOGGIN:{
      console.log(action.user);
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