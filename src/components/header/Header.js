import '../../App.css';
import {useSelector} from "react-redux";

export const Header = () => {

    const {cart, wishlist} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}}) => ({
            cart, wishlist
        })
    )

    const cartTotals = cart.reduce((acc, el) => (acc + el.price), 0).toFixed(2);
    const wishlistTotals = wishlist.reduce((acc, el) => (acc + el.price), 0).toFixed(2);

    return (
        <header className="d-flex justify-between align-center">
            <h2>Anre's store</h2>
            <div className="d-flex justify-between">
                <div className="mx-10" title={wishlistTotals}>wishlist: {wishlist.length}</div>
                <div className="mx-10" title={cartTotals}>cart: {cart.length}</div>
            </div>
        </header>
    )
}