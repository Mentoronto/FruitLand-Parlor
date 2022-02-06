import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name:"cart",
  initialState:{
    itemProducts:[],
    quantity: 0,
    total: 0,
  },

  reducers:{
    addProduct:(state,action)=>{
      state.itemProducts.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset:(state)=>{
      state.products=[];
      state.quantity=0;
      state.total =0;
    },
  },
});

export const {addProduct,reset} = cartSlice.actions;

export default cartSlice.reducer;

// addShakeProduct:(state,action)=>{
//   state.shakeProducts.push(action.payload);
//   state.quantity += 1;
//   state.total += action.payload.price * action.payload.quantity;
// },
// addFruitProduct:(state,action)=>{
//   state.fruitProducts.push(action.payload);
//   state.quantity += 1;
//   state.total += action.payload.price * action.payload.quantity;
// },