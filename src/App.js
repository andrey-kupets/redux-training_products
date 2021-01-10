import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import { useEffect, useCallback } from "react";

function App() {
  const {cart, wishlist, products} = useSelector(
      ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart,
        wishlist,
        products
      })
  );
const dispatch = useDispatch();


  const {productsService} = useServices();

  const fetchData = useCallback(async () => {
    const response = await productsService.getProducts();
    const json = await response.json();
      console.log(json)
  }, [])

  useEffect(() => {
      fetchData();
  }, [])
  return (
    <div className="App">
        <Header/>
        <ProductList/>
      {cart.length} {wishlist.length} {products.length}
    </div>
  );
}

export default App;
