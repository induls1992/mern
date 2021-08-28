import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { userRegisterAction } from '../actions/userActions';

const RegisterScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const dispatch = useDispatch();
    function register(){
        if(password == cPassword){
            userRegisterAction(dispatch, {name, email, password, confirmPassword : cPassword});
        }
    }
    return (<div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-3 card m-5">
                <div>
                    <h1>Register</h1>
                        <input type="text" className="form-control m-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
                        <input type="text" className="form-control m-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                        <input type="text" className="form-control m-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                        <input type="text" className="form-control m-2" value={cPassword} onChange={(e) => setCPassword(e.target.value)} placeholder="Confirm Password" required/>
                        <button className="btn btn-dark" type="button" onClick={()=> register()}>SUBMIT</button>
                </div>
                <a href="/login">Click here to login</a>
            </div>
        </div>
    </div>)
}

export default RegisterScreen;