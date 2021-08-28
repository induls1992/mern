import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from "../components/Product";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import Filter from '../components/Filter';


const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const getallproductsstate = useSelector(state => state.getAllProductsReducer);
    let { loading, products, error } = getallproductsstate;
    useEffect(() => {
        getAllProducts(dispatch);
    }, []);

    const {productsData} = useSelector(state => state.filterProducts);
    if(productsData?.filter)
        products = productsData.filterProductsData;
    return <div>
        <Filter/>
        <div className="row justify-content-center">
            {loading ? <Spinner/> : error ? <Error message="'Something went wrong!!"/> : null}
            {products && products.length > 0 && products.map(product => {
                return <Product product={product} key={product._id} />
            })}
        </div>
    </div>
}
export default HomeScreen;