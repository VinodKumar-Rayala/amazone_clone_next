import { createSlice } from "@reduxjs/toolkit";
import { NextSlice, StoreProduct } from "../../type";
import { current } from 'immer';



const initialState:NextSlice ={
    productData :[],
    favouriteData:[],
    allProducts:[],
    userInfo:null
}

export const nextSlice = createSlice({
    name:'next',
    initialState,
    reducers:{
        addToCart :(state,action) => {
            let existingItem = state.productData.find((item:StoreProduct) =>item._id === action.payload._id);
            if(existingItem){
                existingItem.quantity +=action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        addToFavorite:(state,action) =>{
            let existingItem = state.favouriteData.find((item:StoreProduct) =>item._id === action.payload._id);
            if(existingItem){
                existingItem.quantity +=action.payload.quantity
            }else{
                state.favouriteData.push(action.payload)
            }
        },
        incrementQuantity:(state,action) =>{
            let existingItem = state.productData.find((item:StoreProduct) =>item._id === action.payload._id);
            existingItem && existingItem.quantity ++
        },
        decrementQuantity:(state,action) =>{
            let existingItem = state.productData.find((item:StoreProduct) =>item._id === action.payload._id);
            if(existingItem?.quantity ===1 ){
                existingItem.quantity = 1
            }else{
                existingItem?.quantity && existingItem.quantity--
            }
          
        },
        deleteItem:(state,action) => {
            state.productData = state.productData.filter((item) => item._id !== action.payload)
        },
        resetCart:(state) => {
            state.productData =[]
        },
        addUserInfo:(state,action) => {
            state.userInfo = action.payload
        },
        removeUser:(state) => {
            state.userInfo = null
        }

    }
})

export  const {addToCart,addToFavorite,incrementQuantity,decrementQuantity,deleteItem,resetCart,addUserInfo,removeUser} = nextSlice.actions
export default  nextSlice.reducer;