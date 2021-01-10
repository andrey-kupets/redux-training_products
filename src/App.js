import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";

function App() {
  const {cart, wishlist, products} = useSelector(
      ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart,
        wishlist,
        products
      })
  );
  return (
    <div className="App">
      {cart.length} {wishlist.length} {products.length}
    </div>
  );
}

export default App;
