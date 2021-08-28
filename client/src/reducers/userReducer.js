export const userNewRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case 'USER_REGISTER_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'USER_REGISTER_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true
            }
        case 'USER_REGISTER_FAILED' :
            return {
                ...state,
                loading : false,
                error : true
            }
        default :
            return state
    }
}

export const userLoginReducer = (state = {currentUser : JSON.parse(localStorage.getItem('currentUser')), error : false, success : false, loading : false}, action) => {
    switch(action.type){
        case 'USER_LOGIN_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'USER_LOGIN_SUCCESS' :
            console.log('ghgjhgjh')
            return {
                ...state,
                loading : false,
                success : true
            }
        case 'USER_LOGIN_FAILED' :
            console.log('hellooo')
            return {
                ...state,
                loading : false,
                error : true
            }
        case 'USER_LOGOUT' : 
        return {
            ...state
        }
        default :
            return state
    }
}

export const userUpdateRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case 'USER_UPDATE_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'USER_UPDATE_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true
            }
        case 'USER_UPDATE_FAILED' :
            return {
                ...state,
                loading : false,
                error : true
            }
        default :
            return state
    }
}

export const getAllUsersReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_ALL_USERS_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'GET_ALL_USERS_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true,
                users : action.payload
            }
        case 'GET_ALL_USERS_FAILED' :
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

export const deleteUserUsersReducer = (state = {}, action) => {
    switch(action.type){
        case 'DELETE_USER_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'DELETE_USER_SUCCESS' :
            return {
                ...state,
                loading : false,
                success : true,
                users : action.payload
            }
        case 'DELETE_USER_FAILED' :
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