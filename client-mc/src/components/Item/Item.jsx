import React from "react";
import "./Item.css"
const Item = () => {
    return (
        <div className="card">
            <div class="cart-item">
                <img src="product-image.jpg" alt="Product Image" />
                <div class="cart-item-info">
                    <h4>Product Name</h4>
                    <p>Product Description</p>
                    <p>Quantity: 1</p>
                </div>
                <div class="cart-item-price">$19.99</div>
                {/* <div class="cart-item-actions">
                <button>Edit</button>
                <button>Remove</button>
            </div> */}
            </div>
        </div>
    )
};

export default Item