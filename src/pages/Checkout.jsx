import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!name || !phone) {
      setMessage("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/mpesa/stkpush/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone_number: phone,
          amount: total,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Successfully prompted! Check your phone to complete payment.");
        clearCart(); 
      } else {
        setMessage(`Error: ${data.error || "Payment failed"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-sky-800">Checkout</h1>

      <div className="mb-6">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>KES {item.price * item.quantity}</span>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>KES {total}</span>
          </div>
        )}
      </div>

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
          placeholder="Phone Number(e.g., 2547XXXXXXXX)"
          className="w-full p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={handleCheckout}
          className={`w-full py-2 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-sky-600 hover:bg-sky-700"}`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>
        {message && <p className="text-center text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default Checkout;
