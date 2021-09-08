import App from './App';
import HomeScreen from './screens/HomeScreen';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import ProductDescription from './screens/ProductDescription';
Enzyme.configure({ adapter: new Adapter() });

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
  })
  it('should show Homescreen component for / router (getting array of routes)', () => {
    expect(pathMap['/']).toBe(HomeScreen);
  })
  it('should show Cart component for /cart router', () => {
    expect(pathMap['/cart']).toBe(CartScreen);
  })
  // it('should show Product Description /product router', () => {
  //   expect(pathMap['/product']).toBe(ProductDescription);
  // })
})
