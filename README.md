# royal-flatiron-bank
# royal-flatiron-bank
# bank-app
# phase-2-bot-battlr
# phase-2-wk-2-challenge
# phase-2-wk-2-challenge
# phase-3-magazine-challenge


import React, { useEffect, useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/1');
      const data = await response.json();
      setCartItems(data.products);
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;





          
          CHECK OUT CODE
import React, { useEffect, useState } from 'react';

function CheckoutProcess() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    fetchCheckoutItems();
  }, []);

  const fetchCheckoutItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/checkout');
      const data = await response.json();
      setCheckoutItems(data);
    } catch (error) {
      console.log('Error fetching checkout items:', error);
    }
  };

  return (
    <div>
      <h2>Checkout Process</h2>
      {checkoutItems.length === 0 ? (
        <p>No items in the checkout.</p>
      ) : (
        <ul>
          {checkoutItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              {/* Render other relevant information about the checkout item */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckoutProcess;



   updated shopping cart CODE
   
 import React, { useEffect, useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/userId');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star-filled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Rating: {renderStarRating(item.rating)}</p>
              {/* Render other relevant information about the cart item */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
      

# phase-3-active-record-challenge
# Week-One-Code-Challenge
# phase-4-Pizzas-Restaurants-Challenge
