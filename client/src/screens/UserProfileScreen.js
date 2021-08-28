import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { updateUserAction } from '../actions/userActions';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import Success from '../components/Success';

const UserProfileScreen = (props) => {

    const {currentUser} = useSelector(state => state.userLoginReducer);
    
    const [name, setName] = useState(currentUser?.name || '');
    const [email, setEmail] = useState(currentUser?.email || '')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const dispatch = useDispatch();
    function update (){
        if(password == cPassword){
            dispatch(updateUserAction(currentUser._id, {name, email, password}));
        }else{
            alert('Password not matching!!')
        }
    }
   return <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-3 card m-5">
                <div>
                    <h1>UPDATE USER PROFILE</h1>
                        <input type="text" className="form-control m-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
                        <input type="text" className="form-control m-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                        <input type="text" className="form-control m-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                        <input type="text" className="form-control m-2" value={cPassword} onChange={(e) => setCPassword(e.target.value)} placeholder="Confirm Password" required/>
                        <button className="btn btn-dark" type="button" onClick={()=> update()}>UPDATE</button>
                </div>
            </div>
        </div>
    </div>

}
export default UserProfileScreen;