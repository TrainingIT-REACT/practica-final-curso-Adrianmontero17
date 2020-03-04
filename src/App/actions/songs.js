import actionTypes from "./types";

export const songs = (songs) =>({
  type: actionTypes.GET_SONGS,
  songs
});

export const addFav = (song) =>({
  type: actionTypes.FAV_SONG,
  song
});

export const playSong = (song) => ({
  type: actionTypes.PLAY_SONG ,
  song
});