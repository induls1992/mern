import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductAction, updateProductAction } from "../actions/productActions";
import Error from "../components/Error";
import Spinner from '../components/Spinner';
import Success from '../components/Success';
import { useHistory } from "react-router-dom";

const AddProducts = ({props}) => {
    let history = useHistory();

    const product = history?.location?.state?.product;
    const [name, setName] = useState(product?.name || '');
    const [price, setPrice] = useState(product?.price ||'')
    const [description, setDescription] = useState(product?.description ||'')
    const [imageurl, setImageUrl] = useState(product?.image ||'')
    const [category, setCategory] = useState(product?.category ||'')
    const [countinstock, setCountInStock] = useState(product?.countInStock ||'')

    const dispatch = useDispatch();
    function addProduct() {
        dispatch(addNewProductAction({ name, image: imageurl, category, description, price, countInStock: countinstock }))
    }

    function updateProduct(){
        dispatch(updateProductAction({ _id : product?._id, image: imageurl, category, description, price, countInStock: countinstock }))
    }

    const { success, error, loading } = useSelector(state => state.addProductReducer);

    return <div>
        {loading && <Spinner/>}

        <div className="row justify-content-center mt-5">
            <div className="col-md-12 card m-5">
                <div>
                    <h1>ADD PRODUCT</h1>
                    <input type="text" className="form-control m-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    <input type="text" className="form-control m-2" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
                    <input type="text" className="form-control m-2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                    <input type="text" className="form-control m-2" value={imageurl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required />
                    <input type="text" className="form-control m-2" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
                    <input type="text" className="form-control m-2" value={countinstock} onChange={(e) => setCountInStock(e.target.value)} placeholder="Count in Stock" required />

                    {!product ? <button className="btn btn-dark" type="button" onClick={() => addProduct()}>SUBMIT</button> :
                    <button className="btn btn-dark" type="button" onClick={() => updateProduct()}>UPDATE</button>} 
                </div>
                {error && <Error message="Something went wrong" />}
                {success && <Success message="Product added successfully" />}

            </div>
        </div>
    </div>
};
export default AddProducts;