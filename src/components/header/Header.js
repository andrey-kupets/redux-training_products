import '../../App.css';

export const Header = () => {
    return (
        <header className="d-flex justify-between align-center">
            <h2>Anre's store</h2>
            <div className="d-flex justify-between">
                <div className="mx-10">wishlist: </div>
                <div className="mx-10">cart: </div>
            </div>
        </header>
    )
}