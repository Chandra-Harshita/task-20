import './App.css'
import Shoedata from './Shoedata'
import Card from './Card'
import React, { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  // Add to cart

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoe.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [...prevCart, { ...shoe, quantity: 1 }]
    })
  }

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <header className="header">
        <h1>Logo</h1>
        <div className="headele">
          <p>Home</p>
          <p>Categories</p>
          <p>About Us</p>
        </div>
      </header>
      <div className="container">
        <div className="main-content">
          <div className="shoe-grid">
            {Shoedata.map((shoe) => (
              <Card
                key={shoe.id}
                id={shoe.id}
                name={shoe.name}
                image={shoe.image}
                des={shoe.description}
                price={shoe.price}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
        <div className="cart-container">
          <div className="card">
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="cart-items">
                {cart.map((item) => (
                  <li className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">${item.price}</p>
                    </div>
                    <div className="cart-item-controls">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
