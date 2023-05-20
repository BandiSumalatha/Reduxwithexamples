

export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

const initialState={
    carts:[]
}

const CartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CART':
            return{
                ...state,
                carts:[...state.carts,action.payload ]
            }
            default:
                return state;
    }
}

export default  CartReducer;
