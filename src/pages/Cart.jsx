import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-800">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <h2 className="font-semibold text-sky-800">{item.name}</h2>
                <p className="text-gray-600">KES {item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 font-semibold">
            <span>Total:</span>
            <span>KES {total}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700"
          >
            Clear Cart
          </button>

          <Link to="/checkout">
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
