import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const isLoadinslice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers:{
        setIsLoadingGlobal: (state, action) => action.payload
    }
})

export const { setIsLoadingGlobal} = isLoadinslice.actions;
export const getAllProducts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))


}
export default isLoadinslice.reducer;