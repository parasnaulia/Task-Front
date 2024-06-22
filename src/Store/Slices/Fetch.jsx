 import {createSlice} from "@reduxjs/toolkit"
 const DataSlice=createSlice({
    name:"Data",
    initialState:false,
    reducers:{
        Fetching:(state)=>{
            return !state;
        }
    }
 })
 export default DataSlice.reducer;
 export const {Fetching}=DataSlice.actions;