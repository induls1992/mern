import { Link, Route, Switch } from "react-router-dom";
import AddProducts from "./AddProducts";
import OrdersList from "./OrdersList";
import ProductsList from "./ProductsList";
import UsersList from "./UsersList";

const AdminScreen = (props) => {
    return <div>
        <div className="row justify-content-center m-5">
            <div className="col-md-10">
                <h1>ADMIN PAGE</h1>
                <ul className="admin p-2">
                    <li><Link to="/admin/userslist" > Users List </Link></li>
                    <li><Link to="/admin/productslist" > Products List </Link></li>
                    <li><Link to="/admin/addnewproduct" > Add New Product </Link></li>
                    <li><Link to="/admin/orderslist" > Orders List </Link></li>                    
                </ul>
                <Switch>
                    <Route path="/admin/userslist" component={UsersList}></Route>
                    <Route path="/admin/productslist" component={ProductsList}></Route>
                    <Route path="/admin/addnewproduct" component={AddProducts}></Route>
                    <Route path="/admin/orderslist" component={OrdersList}></Route>
                </Switch>
            </div>
        </div>
    </div>
}
export default AdminScreen;