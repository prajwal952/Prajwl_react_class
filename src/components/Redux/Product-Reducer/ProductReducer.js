import { ACTION_TYPE } from "../types/ActionTypes"


const initailState={
    products:[],
    cartData:[]
  
}

export const productReducer = (state = initailState,action)=>{

    // console.log("action from productReducer is ",action)

    switch(action.type){

        case ACTION_TYPE.ADD_TO_CART:
        return{
            ...state,cartData:[...state.cartData, action.payload]
        }


        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterProduct=state.cartData.filter((cartItem)=>cartItem.id!=action.payload)
            return{
               ...state,cartData:filterProduct
            }

            
            default :
            return state;

    }
}