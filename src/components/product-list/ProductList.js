import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from '../../redux';

export const ProductList = ({products}) => {

    const dispatch = useDispatch();

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    };

    return (
        <div>
            {products.map((product) => (<ProductItem
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                key={product.id}
                product={product}/>
                )
            )}
        </div>
    )
}