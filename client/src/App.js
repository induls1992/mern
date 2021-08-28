import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter, Route} from 'react-router-dom' 
import HomeScreen from './screens/HomeScreen';
import ProductDescription from './screens/ProductDescription';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDescription from './screens/OrderDescription';
import UserProfileScreen from './screens/UserProfileScreen';
import AdminScreen from './screens/AdminScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={ProductDescription}/>
          <Route path="/cart" component={CartScreen}/>
          <Route path="/register" component={RegisterScreen}/>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/orders" component={OrderScreen}/>
          <Route path="/orderinfo/:orderid" component={OrderDescription}/>
          <Route path="/userprofile" component={UserProfileScreen}/>
          <Route path="/admin" component={AdminScreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
