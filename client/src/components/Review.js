import { useState } from "react";
import Rating from "react-rating"
import { useDispatch, useSelector } from "react-redux";
import { addProductReview } from "../actions/productActions";
import { useHistory } from "react-router-dom";

const Review = ({id}) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const currentUser = localStorage.getItem('currentUser');
    let _id = null;
    if(currentUser){
        _id = currentUser._id;
    }
    function sendReview(){
        if(_id)
            dispatch(addProductReview({rating, comment}, id))
        else{
            history.push(`/login`)
        }
    }
    const {product} = useSelector(state => state.getProductByIDReducer);
    const userAlreadyCommented = product?.reviews?.filter(review => review._id == _id) || [];
    return <div className="m-5">
        
        {(userAlreadyCommented.length <= 0) && 
        <><h1>Give your Review</h1>
        <Rating
            initialRating={rating}
            style={{ color: "orange" }}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            onChange={(e)=>setRating(e)}
        />
        <input className="form-control mt-2" type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button className="btn btn-dark mt-5" onClick={sendReview}>SUBMIT REVIEW</button> 
        <hr/>
        </>}
        <h1>Latest Reviews</h1>
        {product?.reviews?.map(review => <div className="m-5">
            <Rating
            initialRating={review.rating}
            style={{ color: "orange" }}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly = {true}
        />
        <div><p>{review.comment}</p></div>
        <div>By : {review.name}</div>
        <hr/>
        </div>)}
    </div>
}
export default Review;