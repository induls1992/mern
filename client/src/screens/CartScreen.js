import { useSelector, useDispatch } from "react-redux";
import { deleteItemFromCartAction , updateCartQuantityAction} from "../actions/cartActions";
import CheckOut from "../components/CheckOut";
import Error from "../components/Error";
import Spinner from '../components/Spinner';
import Success from '../components/Success';


const CartScreen = (props) => {
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.addToCartReducer);
    let subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    function deleteItemFromCart(id){
        deleteItemFromCartAction(dispatch, id);
    }
    function updateQuantity(updatedQuantity, id){
        updateCartQuantityAction(dispatch, {id : id, quantity : updatedQuantity});
    }
    const {loading, success, error} = useSelector(state => {
        return state.placeOrderReducer
    });
    console.log(loading, error, success);
    return (
    <>
    <div className="m-5">MY CART</div>
        {loading && <Spinner/>}
        <div className="row justify-content-center ">
            <div className="col-md-8 card">
            <table className="table table-bordered m-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                <select value = {item.quantity} onChange={(e)=>updateQuantity(+e.target.value, item._id)}>                                    
                                    {[...Array(item.countInStock).keys()].map((x, i)=>{
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}
                                </select>
                            </td>
                            <td>
                                {item.quantity * item.price}
                            </td>
                            <td>
                                <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteItemFromCart(item._id)}></i>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <hr/>
            <h1 className="text-center">SubTotal : {subTotal}</h1>
            <hr/>
            <div className="text-center">
                <CheckOut amount={subTotal}/>
            </div>
            <div>
                {error && <Error message="Something went wrong!"/>}
                {success && <Success message="Order placed successfully!"/>}
            </div>
            </div>
        </div>
    </>
    )


}

export default CartScreen;