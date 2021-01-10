import '../../App.css';
import {useSelector} from "react-redux";

export const Header = () => {

    const {cart, wishlist} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}}) => ({
            cart, wishlist
        })
    )

    return (
        <header className="d-flex justify-between align-center">
            <h2>Anre's store</h2>
            <div className="d-flex justify-between">
                <div className="mx-10">wishlist: {wishlist.length}</div>
                <div className="mx-10">cart: {cart.length}</div>
            </div>
        </header>
    )
}