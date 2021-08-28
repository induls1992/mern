import { Link } from "react-router-dom";
import Rating from 'react-rating';
const Product = ({ product }) => (
    <div className="col-md-3 m-2 card p-2 text-left">
        <Link to={`product/${product._id}`}>
            <img src={product.image} className="img-fluid" />
            <h1>{product.name}</h1>
            <Rating
                initialRating={product.rating}
                style={{ color: "orange" }}
                emptySymbol="fa fa-star-o fa-1x"
                fullSymbol="fa fa-star fa-1x"
                readonly={true}
            />
            <h1>Price : {product.price}</h1>
        </Link>
    </div>
);
export default Product;