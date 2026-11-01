import ProductCard from "./ProductCard";

function ProductList({ products, onDelete }) {
    if (products.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default ProductList;