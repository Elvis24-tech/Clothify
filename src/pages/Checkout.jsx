import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!name || !phone) {
      setMessage("Please enter your name and phone number.");
      return;
    }
    setMessage(`Order placed! Total: KES ${total}`);
    clearCart();
  };

  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-sky-800">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Summary */}
          <div className="mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>KES {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-2">
              <span>Total</span>
              <span>KES {total}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              onClick={handleCheckout}
              className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700"
            >
              Proceed to Payment
            </button>
            {message && <p className="text-center text-green-600 mt-2">{message}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
