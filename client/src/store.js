import { getAllProductsReducer, getProductByIDReducer, filterProducts, addProductsReviewReducer, deleteProductReducer, addProductReducer, updateProductReducer} from "./reducers/productReducers";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addToCartReducer } from "./reducers/cartReducer";
import { userLoginReducer, userNewRegisterReducer, userUpdateRegisterReducer, getAllUsersReducer, deleteUserUsersReducer } from "./reducers/userReducer";
import { placeOrderReducer, getOrdersByUserReducer, getAllOrdersReducer } from "./reducers/orderReducer";

const finalReducers = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getProductByIDReducer : getProductByIDReducer,
    userNewRegisterReducer : userNewRegisterReducer,
    addToCartReducer : addToCartReducer,
    userLoginReducer : userLoginReducer,
    filterProducts : filterProducts,
    placeOrderReducer : placeOrderReducer,
    getOrdersByUserReducer : getOrdersByUserReducer,
    addProductsReviewReducer : addProductsReviewReducer,
    userUpdateRegisterReducer : userUpdateRegisterReducer,
    getAllUsersReducer : getAllUsersReducer,
    deleteUserUsersReducer : deleteUserUsersReducer,
    deleteProductReducer : deleteProductReducer,
    addProductReducer : addProductReducer,
    updateProductReducer : updateProductReducer,
    getAllOrdersReducer : getAllOrdersReducer
});

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
    addToCartReducer : {cartItems}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
    finalReducers,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
export default store;