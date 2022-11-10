import { createSlice } from "@reduxjs/toolkit";
import cities from "../components/data";
// const initialValues= cities
export const OperationSlice = createSlice({
    name: 'operationdata',
    initialState: {
      value:[],
      favourite:false,
      recent:[],
    },
    reducers:{
      addCity: (state, action) => {
        const val=state.value.map(value=>value.id);
        if(val.includes(action.payload.id)&& action.payload.id!=''){
          alert("already exists")
        }
        else{
          state.value.push(action.payload);
        }
        },
        deleteCity: (state, action) => {
            console.log('inside delete reducer')
            console.log(action.payload.id)
            state.value = state.value.filter(site=>site.id !== action.payload.id)
          },
          setFavourite:(state,action)=>{
            state.favourite=action.payload
          },
          recentCity:(state,action)=>{
            state.recent.push(action.payload);
          },
          deleteRecentCity:(state,action) => {
            console.log('deleted')
            state.recent = state.recent.filter(site => site.id!== action.payload.id)
          },
          removeAll:(state,action)=>{
            state.value=[]
          },
          clearAll:(state,action)=>{
            state.recent=[]
          }
    },

  });
  
  export const {addCity,deleteCity,setFavourite,recentCity,deleteRecentCity,removeAll,clearAll} = OperationSlice.actions;
  
  export default OperationSlice.reducer;