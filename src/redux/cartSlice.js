import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
   name:"cart",
   initialState:[],
   reducers:{
    AddItem: (state, action) => {
        let existItem = state.find((item) => item.id === action.payload.id);
        
        if (existItem) {
            existItem.qty += 1;  
        } else {

           state.push(action.payload)
       }
      },
      RemoveItem:(state,action)=>{
        let existItem= state.find((item)=> item.id === action.payload);
        if(existItem.qty>1){
            existItem.qty-=1;
        } else{

            return state.filter((item)=>item.id!==action.payload)
        }
      }
     
   } 
})

export const {AddItem,RemoveItem}=cartSlice.actions
export default cartSlice.reducer;