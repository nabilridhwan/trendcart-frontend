"use client";

import React, { useState } from "react";
import SearchIcon from "@/public/icons/search.svg";
import UserIcon from "@/public/icons/placeholder.svg"; // Replace with actual UserIcon component
import {
  LogoutButton,
  NavBarWrapper,
  NavBrandWrapper,
  NavTitle,
  SearchBox,
  SearchButton,
  SearchWrapper,
} from "@/components/navbar/navbar.styles";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const placeholderLogo = "/path/to/placeholder/logo.png";

const initialCartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    quantity: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 9.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
    quantity: 3,
    image: "https://via.placeholder.com/150",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="page-container flex flex-col min-h-screen min-w-screen">
      <Navbar />
      <ItemNavbar />
      <div className="content-wrapper p-8 bg-white shadow-xl rounded-lg m-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-6 text-right">
              <h3 className="text-xl font-bold">
                Total: ${cartTotal.toFixed(2)}
              </h3>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-8 w-full max-w-lg mx-auto">
            <p className="text-lg text-gray-700">
              Your cart is currently empty.
            </p>
            <a
              href="/home"
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 inline-block"
            >
              Continue Shopping
            </a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
