import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllUsersAction, deleteUserAction } from "../actions/userActions";

const UsersList = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUsersAction());
    }, [])
    const allUsers = useSelector(state => {
        return state.getAllUsersReducer
    });
    const {users, loading, error} = allUsers;
    function deleteItemFromCart(id){
        dispatch(deleteUserAction(id))
    }
    return <div>
        <h1>ALL USERS</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users?.data?.map(item => (<tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteItemFromCart(item._id)}></i>
                    </td>
                </tr>))}
            </tbody>
        </table>

    </div>
}
export default UsersList;