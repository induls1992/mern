import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/userActions";

const NavBar = (props) => {
    const {cartItems} = useSelector(state => state.addToCartReducer);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">Shae Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    {currentUser ? (
                        <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {currentUser.name}
                        </a>
                      
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a className="dropdown-item" href="/profile">Profile</a></li>
                          <li><a className="dropdown-item" href="/orders">Orders</a></li>
                          <li onClick={()=>dispatch(logoutAction())}><a className="dropdown-item">Logout</a></li>
                        </div>
                      </div>
                    ) : (<li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>)}                        
                        <li className="nav-item">
                            <a className="nav-link" href='/cart'>
                                <i className="fa fa-shopping-cart p-3 color-white" aria-hidden="true"></i>
                            </a>
                            <span className="color-white">{cartItems.length}</span>                        
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;