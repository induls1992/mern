import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { deleteProductAction, getAllProducts } from "../actions/productActions";
import { useHistory } from "react-router-dom";

const ProductsList = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(()=>{
        getAllProducts(dispatch);
    }, [])
    const allProducts = useSelector(state => {
        return state.getAllProductsReducer
    });
    const {products, loading, error} = allProducts;
    function deleteProduct(id){
        dispatch(deleteProductAction(id))
    }
    function setSelectedProductDetails(id){
        let product = products.find(x => x._id == id);
        console.log(product);
        history.push({pathname:  `/admin/addnewproduct`,
        state: {  
          product: product, 
        }
    });
    }
    return <div>
    <h1>ALL PRODUCTS</h1>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products?.map(item => (<tr onClick={() => setSelectedProductDetails(item._id)}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.countInStock}</td>
                <td>{item.category}</td>
                <td>
                    <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteProduct(item._id)}></i>
                </td>
            </tr>))}
        </tbody>
    </table>

</div>
};
export default ProductsList;