import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserID } from "../actions/orderActions";
import Error from "../components/Error";
import Spinner from '../components/Spinner';
import Success from '../components/Success'
import { useHistory } from "react-router-dom";

const OrderScreen = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            dispatch(getOrdersByUserID())
        }else{
            window.location.href = '/login'
        }
    }, [])
    const {orders, loading, error} = useSelector(state => state.getOrdersByUserReducer);
    return (
        <div className="m-5 justify-content-center">
            <h1>MY ORDERS</h1>
            {loading && <Spinner/>}
            {orders && <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.data.map(order => <tr onClick={() => history.push(`/orderinfo/${order._id}`)}>
                        <td>{order._id}</td>
                        <td>Rs {order.orderAmount} /-</td>
                        <td>{order.createdAt}</td>
                        <td>{order.transactionId}</td>
                        <td>{order.isDelivered ? "Delivered" : "Order Placed"}</td>
                    </tr>)}
                </tbody>
            </table>}
        </div>
    )
}
export default OrderScreen;