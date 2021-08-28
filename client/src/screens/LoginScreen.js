import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { userLoginAction } from '../actions/userActions';
import Error from '../components/Error';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    function login(){
            userLoginAction(dispatch, {email, password});     
    }
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href = '/';
        }
    }, [])
    const x = useSelector(state => state.userLoginReducer);
    console.log( x);
    const error = null;
    return (<div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-3 card m-5">
        {error && <Error message="Invalid Credentials"/>}
                <div>
                    <h1>LOGIN</h1>
                        <input type="text" className="form-control m-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                        <input type="text" className="form-control m-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                        <button className="btn btn-dark" type="button" onClick={()=> login()}>LOGIN</button>
                </div>
                <a href="/register">Click here to register</a>
            </div>
        </div>
    </div>)
}

export default LoginScreen;