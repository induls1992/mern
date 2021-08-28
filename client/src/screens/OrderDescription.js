import { useSelector } from "react-redux";

const OrderDescription = ({match}) => {
    const {orders, loading, error} = useSelector(state => {
        return state.getOrdersByUserReducer
    });
    console.log(orders)
    const orderDetails = orders?.data?.filter(order => order._id == match.params.orderid);
    return <div className="m-5 justify-content-center">
        <h1>Order Info of {match.params.orderid}</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="card m-2">
                    <h1>Items in your Order</h1>
                    <hr/>
                    {orderDetails[0]?.orderItems.map(orderItem => <div className="card m-2">
                       Item : {orderItem?.name}
                    </div>)}
                </div>

            </div>

            <div className="col-md-6">
                <div className="card m-5 float-left">
                    <h1>Order Details</h1>
                    <hr/>
                    <div>Order ID : {orderDetails[0]._id}</div>
                    <div>Total Amount : {orderDetails[0].orderAmount}</div>
                    <div>Date of Order : {orderDetails[0].updatedAt}</div>
                    <div>Transaction ID : {orderDetails[0].transactionId}</div>
                    <div>Status : {orderDetails[0].isDelivered ? 'Order Delivered' : 'Order Placed'}</div>
                </div>

                <div className="card m-5 float-left">
                    <h1>Shipping Details</h1>
                    <hr/>
                    <div>Name : {orderDetails[0].name}</div>
                    <div>Pincode : {orderDetails[0].shippingAddress.address}</div>
                    <div>Address : {orderDetails[0].shippingAddress.postalCode}</div>
                </div>

            </div>
        </div>
    </div>
}
export default OrderDescription;