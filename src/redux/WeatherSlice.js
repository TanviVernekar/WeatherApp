import { createSlice } from "@reduxjs/toolkit";
import cities from "../components/data";

import { createAsyncThunk } from "@reduxjs/toolkit";
// const initialState=cities
const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/';
export const getPosts = createAsyncThunk('weatherdata/getData', async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '85953732d7msh5eb0c447f8596ddp17bfc6jsn39b2ecde3cac',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
    const response = await fetch(BASE_URL + 'current.json?q=Udupi', options)
    try {
      const data = response.json();
      console.log("hiiī",data)
      return data;
    } catch (error) {
      console.log(error);
    }
  });
export const WeatherSlice= createSlice({
    name:'weatherDetails',
    initialState:{
        // value:initialState,
        list:[],
        status:null,
    },
    extraReducers:{
        [getPosts.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [getPosts.fulfilled]:(state,{payload})=>{
            state.list = payload
            state.status = 'success'
        },
        [getPosts.rejected]:(state,action)=>{
            state.status = 'failed'
        },
    },
})


// export const {} = WeatherSlice.actions;
export default WeatherSlice.reducer;