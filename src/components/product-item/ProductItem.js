export const ProductItem = ({
    isAddedToCart,
    isAddedToWishlist,
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
            <button
                style={{background: isAddedToCart ? 'lightgreen' : 'lightcoral'}}
                onClick={() => onAddToCart(product)}>
                {isAddedToCart ? 'add to cart' : 'remove from cart'}
            </button>
            <button
                style={{background: isAddedToWishlist ? 'lightgreen' : 'lightcoral'}}
                onClick={() => onAddToWishlist(product)}>
                {isAddedToWishlist ? 'add to wishlist' : 'remove from wishlist'}
            </button>
            <hr/>
        </div>
    )
}