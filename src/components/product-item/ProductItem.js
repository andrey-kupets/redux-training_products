export const ProductItem = ({
    onAddToCart,
    onAddToWishlist,
    product,
    product: {id, title, price, description}}) => {
    return (
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button onClick={() => onAddToCart(product)}>add to cart</button>
            <button onClick={() => onAddToWishlist(product)}>add to wishlist</button>
            <hr/>
        </div>
    )
}