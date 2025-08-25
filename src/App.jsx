import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  let Page = Home;
  if (route === "/men") Page = Men;
  if (route === "/women") Page = Women;
  if (route === "/cart") Page = Cart;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Page />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
