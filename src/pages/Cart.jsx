import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Oxford Shirt",
      price: 79.99,
      quantity: 1,
      size: "M",
      color: "White",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80"
    },
    {
      id: 2,
      name: "Elegant Midi Dress",
      price: 129.99,
      quantity: 2,
      size: "S",
      color: "Navy",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
    }
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <div className="cart-content container">
        {cartItems.length > 0 ? (
          <div className="cart-grid">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-meta">Size: {item.size} | Color: {item.color}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <div className="item-total">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <button className="item-remove" onClick={() => removeItem(item.id)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <p className="shipping-note">
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}

              <Link to="/checkout" className="btn btn-primary checkout-btn">
                Proceed to Checkout
              </Link>

              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="58" stroke="#d9d9d9" strokeWidth="3"/>
              <path d="M45 30L35 50M85 50l-10-20M30 50h60l7.5 45H22.5L30 50zM45 105a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM85 105a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke="#d9d9d9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

