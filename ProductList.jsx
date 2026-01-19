// ProductList.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const productsData = [
  { id: 1, name: "نبتة الصبار", price: 15, category: "Succulent", image: "https://images.unsplash.com/photo-1603071560940-c8d7fdaef21f?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "نبتة الزهور الداخلية", price: 25, category: "Flowering", image: "https://images.unsplash.com/photo-1611095973512-8bb8fa19f9c8?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "نبتة الفيلوديندرون", price: 30, category: "Indoor", image: "https://images.unsplash.com/photo-1611095973512-8bb8fa19f9c8?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "نبتة الألوة", price: 20, category: "Succulent", image: "https://images.unsplash.com/photo-1603071560940-c8d7fdaef21f?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "نبتة الأوركيد", price: 40, category: "Flowering", image: "https://images.unsplash.com/photo-1611095973512-8bb8fa19f9c8?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "نبتة اللبلاب", price: 18, category: "Indoor", image: "https://images.unsplash.com/photo-1611095973512-8bb8fa19f9c8?auto=format&fit=crop&w=400&q=80" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [products] = useState(productsData);

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-list-page">
      <h1> Paradise Nursery</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to basket</button>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <p>numper</p>: {cartItems.length}</p>
      </div>
    </div>
  );
};

export default ProductList;
