function ProductCard({ product, onDelete }) {
    return (
        <div className="card">
            <div>
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
    );
}

export default ProductCard;