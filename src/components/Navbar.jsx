function Navbar({ totalProducts, totalStock }) {
    return (
        <nav className="navbar">
            <h1>Stockify - Product & Inventory Dashboard</h1>
            <div>
                <span>Total Products: {totalProducts}</span>
                <span>Total Stock: {totalStock}</span>
            </div>
        </nav>
    );
}

export default Navbar;