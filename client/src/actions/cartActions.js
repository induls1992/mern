export const addToCartAction = (dispatch, product, quantity) => {
    const productDetails = {
        _id : product._id,
        name : product.name,
        quantity : quantity,
        price : product.price,
        countInStock : product.countInStock
    }
    dispatch({type : 'ADD_TO_CART', payload : productDetails})
}

export const deleteItemFromCartAction = (dispatch, id) => {
    dispatch({type : 'DELETE_ITEM_FROM_CART', payload : id})
}

export const updateCartQuantityAction = (dispatch, updatedData) => {
    dispatch({type : 'UPDATE_CART_QUANTITY', payload : updatedData})
}