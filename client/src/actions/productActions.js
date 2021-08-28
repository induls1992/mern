import axios from "axios";

import store from '../store';


export const getAllProducts = (dispatch)=>{
    dispatch({type:'GET_PRODUCTS_REQUEST'});
    axios.get('/api/products/getallproducts').then(res=>{
        console.log(res);
        dispatch({type:'GET_PRODUCTS_SUCCESS', payload:res.data});
    }).catch(err=>{
        console.log(err);
        dispatch({type:'GET_PRODUCTS_FAILURE', payload:err});
    });
}

export const getProductByID = (dispatch, productID)=>{
    dispatch({type:'GET_PRODUCTBYID_REQUEST'});
    axios.post('/api/products/getproductbyid', {productID}).then(res=>{
        console.log(res);
        dispatch({type:'GET_PRODUCTBYID_SUCCESS', payload:res.data});
    }).catch(err=>{
        console.log(err);
        dispatch({type:'GET_PRODUCTBYID_FAILURE', payload:err});
    });
}

export const filterProducts = (dispatch, searchKey, sort, category) => {
    const allProducts = store.getState().getAllProductsReducer?.products;
    let filterProductsData = allProducts.filter(product => {
        return product.name.toLowerCase().includes(searchKey.toLowerCase()) 
            || product.description.toLowerCase().includes(searchKey.toLowerCase())
    });
    if(category && category != 'all')
        filterProductsData = filterProductsData.filter(product => product.category.toLowerCase() == category.toLowerCase());
    if(sort = "lth")
        filterProductsData = filterProductsData.sort((p1, p2)=>p1.price-p2.price);
    if(sort = "htl")
        filterProductsData = filterProductsData.sort((p2, p1)=>p1.price-p2.price);

    dispatch({type:'FILTERED_PRODUCTS', payload : {filterProductsData, filter : true}});    
}

export const addProductReview = (review, productid) => (dispatch, getState) => {
    dispatch({type:"USER_REVIEW_REQUEST"});
    const {currentUser} = store.getState().userLoginReducer;
    axios.post('/api/products/addProductReview', {currentUser,productid, review}).then(response => {
        dispatch({type:"USER_REVIEW_SUCCESS", payload : response});
    }).catch(error => {
        dispatch({type:"USER_REVIEW_ERROR"});
    });
}

export const deleteProductAction = (id) => dispatch => {
    dispatch({type : "DELETE_PRODUCT_REQUEST"});
    axios.post('/api/products/deleteproduct', {id}).then(res =>{
        dispatch({type : "DELETE_PRODUCT_SUCCESS", payload : res});
    }).catch(error =>{
        dispatch({type : "DELETE_PRODUCT_FAILED", payload : error});
    });
}

export const addNewProductAction = (newProduct) => dispatch => {
    dispatch({type : 'ADD_PRODUCT_REQUEST'})
    axios.post('/api/products/addproduct', {...newProduct, rating : 5 }).then(res => {
        dispatch({type : 'ADD_PRODUCT_SUCCESS'})
    }).catch(error => {
        dispatch({type :'ADD_PRODUCT_FAILED'})
    });
}

export const updateProductAction = (updatedProduct) => dispatch => {
    dispatch({type : 'UPDATE_PRODUCT_REQUEST'})
    axios.post('/api/products/updateproduct', updatedProduct).then(res => {
        dispatch({type : 'UPDATE_PRODUCT_SUCCESS'})
    }).catch(error => {
        dispatch({type :'UPDATE_PRODUCT_FAILED'})
    });
}