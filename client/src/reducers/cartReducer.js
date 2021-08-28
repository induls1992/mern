export const addToCartReducer = (state = {cartItems : JSON.parse(localStorage.getItem('cartItems'))}, action) => {
    switch(action.type){
        case 'ADD_TO_CART' : 
        const alreadyExist = state.cartItems.find(item => item._id == action.payload._id);
        if(alreadyExist){
            alreadyExist.quantity = action.payload.quantity;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            return {
                ...state,
                cartItems : [...state.cartItems]
            }
        }
        localStorage.setItem('cartItems', JSON.stringify([...state.cartItems, action.payload]));
        return {
            ...state,
            cartItems : [...state.cartItems, action.payload]
        }

        case 'DELETE_ITEM_FROM_CART' :
        const itemIndex = state.cartItems.findIndex(item=> item._id == action.payload);
        (itemIndex >= 0) && state.cartItems.splice(itemIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        return {
            ...state,
            cartItems : [...state.cartItems]
        }

        case 'UPDATE_CART_QUANTITY' : 
        const itemAlreadyExist = state.cartItems.find(item => item._id == action.payload.id);
        if(itemAlreadyExist){
            itemAlreadyExist.quantity = action.payload.quantity;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            return {
                ...state,
                cartItems : [...state.cartItems]
            }
        }

        default : 
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        return {
            ...state
        }
    }
}