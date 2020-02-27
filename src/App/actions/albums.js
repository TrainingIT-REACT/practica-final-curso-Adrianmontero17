import actionTypes from "./types";

export const albums = (albums) =>({
  type: actionTypes.GET_ALBUMS,
  albums
});

export const addFav = (album) =>({
  type: actionTypes.FAV_ALBUM,
  album
});