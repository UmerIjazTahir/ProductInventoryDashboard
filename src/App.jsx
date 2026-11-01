import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 89, stock: 25 },
    { id: 2, name: "Smart Watch", category: "Electronics", price: 120, stock: 18 },
    { id: 3, name: "Office Chair", category: "Furniture", price: 150, stock: 12 },
    { id: 4, name: "Running Shoes", category: "Fashion", price: 75, stock: 30 },
    { id: 5, name: "Coffee Maker", category: "Appliances", price: 95, stock: 10 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div>
      <Navbar totalProducts={products.length} totalStock={totalStock} />

      <div className="container">
        <AddProductForm onAddProduct={addProduct} />
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ProductList products={filteredProducts} onDelete={deleteProduct} />
      </div>
    </div>
  );
}

export default App;