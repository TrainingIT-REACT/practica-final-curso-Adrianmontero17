import actionTypes from "./types";

export const loggin = (user) =>({
  type: actionTypes.LOGGIN,
  user
})