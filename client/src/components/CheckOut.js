import StripeCheckOut from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { placeOrderAction } from '../actions/orderActions';
import { useHistory } from "react-router-dom";

const CheckOut = ({amount}) => {
    const PUBLISHABLE_STRIPE_KEY = 'pk_test_51JSm9ESBK5kchUR4vTsSGuUBJd14eMoRfnT9XnkTdzUkaiy4moCs7up0lBdPe2j8n2DtbXNblGttGMqICpfcS3QS00otKvb6aX';
    const dispatch = useDispatch();
    let history = useHistory();

    function onToken(token) {
        dispatch(placeOrderAction(token, amount));
    }
    function validateUser(){
        if(!localStorage.getItem('currentUser'))        
            window.location.href="/login"   
    }
    return <StripeCheckOut stripeKey={PUBLISHABLE_STRIPE_KEY}
        shippingAddress
        token={onToken}
        amount
        currency='INR'>
        <button className="btn btn-dark pay-now-btn" onClick={validateUser}>PAY NOW</button>
    </StripeCheckOut>
}
export default CheckOut;