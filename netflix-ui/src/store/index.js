import { async } from "@firebase/util";
import {  configureStore, createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import { API_KEY, TMDB_URL } from "../utils/constants";

const initialState = {
    movies:[],
    genresLoaded:false,
    genres:[],
};
const NetflixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder) =>{}, 
});
export const getGenres = createAsyncThunk("netflix/genres", async() => {
    const {data}  = await axios.get(
        `${TMDB_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    // return genres;
    console.log(data)
})

export const store = configureStore({
    reducer: {
      netflix: NetflixSlice.reducer,
    },
  });