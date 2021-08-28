import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllOrdersAction } from "../actions/orderActions";

const OrdersList = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllOrdersAction());
    }, [])
    const allOrders = useSelector(state => {

        return state.getAllOrdersReducer
    });
    const {orders, loading, error} = allOrders;
    
   return <div>
       <h1>Orders List</h1>
       <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Transaction ID</th>
                </tr>
            </thead>
            <tbody>
                {orders?.data?.map(item => (<tr onClick={() => window.location.href = `/orderinfo/${item._id}`}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.orderAmount}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.transactionId}</td>
                </tr>))}
            </tbody>
        </table>
    </div>
};
export default OrdersList;