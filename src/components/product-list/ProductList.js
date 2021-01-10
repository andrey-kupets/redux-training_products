import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from '../../redux';

export const ProductList = ({products}) => {

    const dispatch = useDispatch();
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({wishlist, cart}))

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    };

    return (
        <div>
            {products.map((product) => (<ProductItem
                isAddedToCart={!cart.find(({id}) => id === product.id)}
                isAddedToWishlist={!wishlist.find(({id}) => id === product.id)}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                key={product.id}
                product={product}/>
                )
            )}
        </div>
    )
}