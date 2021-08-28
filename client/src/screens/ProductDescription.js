import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../actions/cartActions";
import { getProductByID } from '../actions/productActions';
import Spinner from "../components/Spinner";
import Error from '../components/Error'
import Review from "../components/Review";

const ProductDescription = ({ match }) => {
    const [quantity, setQuantity] = useState(1);
    const productId = match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        getProductByID(dispatch, productId, quantity)
    }, [])
    const { loading, product, error } = useSelector(state => state.getProductByIDReducer);
    function addToCart(){
        addToCartAction(dispatch, product, quantity)
    }
    return (<div>
        {loading ? <Spinner/> : error ? <Error message="'Something went wrong!!"/> :
            (<div className="row">
                <div className="col-md-6">
                    <div className="card p-2 m-5">
                        <h1>{product.name}</h1>
                        <img src={product.image} className="img-fluid big-img" />
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="col-md-6 text-left">
                    <div className="m-5">
                        <h1>Price : {product.price}</h1>
                        <hr />
                        <h1>Select Quantity</h1>
                        <select value={quantity} onChange={(e)=>setQuantity(+e.target.value)}>{[...Array(product.countInStock).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}</select>
                        <hr />
                        <button className="btn btn-dark" onClick={addToCart}>ADD TO CART</button>
                    </div>
                    <hr/>
                    <Review id={product._id}/>

                </div>
            </div>)}
    </div>);
}
export default ProductDescription;