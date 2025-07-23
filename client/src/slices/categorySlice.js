import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: null,
    loading: false,
}

const categorySlice = createSlice({
    name:"category",
    initialState: initialState,
    reducers:{
        setCategories(state,value){
            state.categories= value.payload;
        },
        setLoading(state,value){
            state.loading = value.payload;
        }
    }
})

export const { setCategories,setLoading } = categorySlice.actions;
export default categorySlice.reducer;