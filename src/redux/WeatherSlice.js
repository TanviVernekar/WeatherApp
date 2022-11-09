import { createSlice } from "@reduxjs/toolkit";
import cities from "../components/data";
const initialState=cities

export const WeatherSlice= createSlice({
    name:'weatherDetails',
    initialState:{
        value:initialState,
    },
    reducers:{},
})

export const {} = WeatherSlice.actions;
export default WeatherSlice.reducer;