import axios from 'axios';

export const userRegisterAction = (dispatch, userData) => {
    dispatch({type : 'USER_REGISTER_REQUEST'})
    axios.post('/api/users/register', userData).then(res => {
        dispatch({type : 'USER_REGISTER_SUCCESS'})
    }).catch(error => {
        dispatch({type :'USER_REGISTER_FAILED'})
    });
}

export const userLoginAction = (dispatch, userData) => {
    dispatch({type : 'USER_LOGIN_REQUEST'})
    axios.post('/api/users/login', userData).then(res => {
        dispatch({type : 'USER_LOGIN_SUCCESS'});
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        window.location.href = '/'
    }).catch(error => {
        dispatch({type :'USER_LOGIN_FAILED'});
        localStorage.removeItem('currentUser');
    });
}

export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');
    dispatch({type : 'USER_LOGOUT'});
    window.location.href = '/login';
}

export const updateUserAction = (userid, updateduser) => dispatch => {
    dispatch({type : 'USER_UPDATE_REQUEST'})
    axios.post('/api/users/update', {userid, ...updateduser}).then(res => {
        dispatch({type : 'USER_UPDATE_SUCCESS'})
    }).catch(error => {
        dispatch({type :'USER_UPDATE_FAILED'})
    });
}

export const getAllUsersAction = () => dispatch => {
    dispatch({type : "GET_ALL_USERS_REQUEST"});
    axios.get('/api/users/getallusers').then(res =>{
        dispatch({type : "GET_ALL_USERS_SUCCESS", payload : res});
    }).catch(error =>{
        dispatch({type : "GET_ALL_USERS_FAILED", payload : error});
    })
}

export const deleteUserAction = (id) => dispatch => {
    dispatch({type : "DELETE_USER_REQUEST"});
    axios.post('/api/users/deleteuser', {id}).then(res =>{
        dispatch({type : "DELETE_USER_SUCCESS", payload : res});
    }).catch(error =>{
        dispatch({type : "DELETE_USER_FAILED", payload : error});
    });
}