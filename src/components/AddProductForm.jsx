import { useState } from "react";

function AddProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !category || !price || !stock) {
            alert("Please fill all fields");
            return;
        }

        onAddProduct({
            id: Date.now(),
            name: name,
            category: category,
            price: Number(price),
            stock: Number(stock),
        });

        setName("");
        setCategory("");
        setPrice("");
        setStock("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddProductForm;