import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    selectedCategory: "Collections",
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        selectedCategory:(state,action)=>{
            state.selectedCategory = action.payload
        }
    }
})


export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;