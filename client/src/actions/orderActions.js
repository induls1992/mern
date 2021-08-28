import axios from "axios";
import store from "../store";

export const placeOrderAction = (token, subTotal) => (dispatch, getState) => {
    dispatch({type : 'PLACE_ORDER_REQUEST'});
    const {currentUser} = store.getState().userLoginReducer;
    const {cartItems} = store.getState().addToCartReducer;
    axios.post('api/orders/placeOrder', {token, subTotal, currentUser, cartItems}).then(res => {
        dispatch({type : 'PLACE_ORDER_SUCCESS'});
    }).catch(error => {
        dispatch({type : 'PLACE_ORDER_FAILED'});
        console.log(error);
    });
}

export const getOrdersByUserID = () => (dispatch, getState) => {
    dispatch({type: "GET_ORDERS_BY_ID_REQUEST"});
    const {currentUser} = getState().userLoginReducer;
    axios.post('/api/orders/getOrdersByUser', currentUser).then(response => {
        dispatch({type : "GET_ORDERS_BY_ID_SUCCESS", payload : response})
    }).catch(error => {
        dispatch({type : "GET_ORDERS_BY_ID_FAILED"});
    })
}

export const getAllOrdersAction = () => dispatch => {
    dispatch({type : "GET_ALL_ORDERS_REQUEST"});
    axios.get('/api/orders/getallorders').then(res =>{
        dispatch({type : "GET_ALL_ORDERS_SUCCESS", payload : res});
    }).catch(error =>{
        dispatch({type : "GET_ALL_ORDERS_FAILED", payload : error});
    })
}