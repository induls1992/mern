export const getAllProductsReducer = (state = {products : []}, action) => {
    switch (action.type){
        case 'GET_PRODUCTS_REQUEST' : return {
            loading :true
        }
        case 'GET_PRODUCTS_SUCCESS' : return {
            loading : false,
            products : action.payload
        }
        case 'GET_PRODUCTS_FAILURE' : return {
            loading : false,
            error : action.payload
        }
        default : return state;
    }
}

export const getProductByIDReducer = (state = {product : {}}, action) => {
    switch(action.type){
        case 'GET_PRODUCTBYID_REQUEST' : return {
            loading:true
        }
        case 'GET_PRODUCTBYID_SUCCESS' : return {
            loading : false,
            product : action.payload
        }
        case 'GET_PRODUCTBYID_FAILURE' : return {
            loading : false,
            error : action.payload
        }
        default : return state;
    }
}

export const filterProducts = (state = {productsData : null}, action) => {
    switch(action.type){
        case 'FILTERED_PRODUCTS' : return {
            productsData : action.payload
        }
        default : return state;
    }
}

export const addProductsReviewReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_REVIEW_REQUEST' : 
            return {
                ...state,
                loading : true
            }
        case 'USER_REVIEW_SUCCESS' : 
            return {
                ...state,
                loading : false,
                review : action.payload
            }
        case 'USER_REVIEW_ERROR' : 
            return {
                ...state,
                loading : false,
                error : true
            }
        default : 
            return state;
    }
}

export const deleteProductReducer = (state = {}, action) => {
    switch(action.type){
        case 'DELETE_PRODUCT_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'DELETE_PRODUCT_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true,
                users : action.payload
            }
        case 'DELETE_PRODUCT_FAILED' :
            return {
                ...state,
                loading : false,
                error : true,
                users : action.payload
            }
        default :
            return state
    }
}

export const addProductReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_PRODUCT_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'ADD_PRODUCT_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true,
                users : action.payload
            }
        case 'ADD_PRODUCT_FAILED' :
            return {
                ...state,
                loading : false,
                error : true,
                users : action.payload
            }
        default :
            return state
    }
}

export const updateProductReducer = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_PRODUCT_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'UPDATE_PRODUCT_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true,
                users : action.payload
            }
        case 'UPDATE_PRODUCT_FAILED' :
            return {
                ...state,
                loading : false,
                error : true,
                users : action.payload
            }
        default :
            return state
    }
}