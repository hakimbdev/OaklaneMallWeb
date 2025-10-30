import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', formData)
    alert('Order placed successfully! Thank you for shopping with Oaklane Mall.')
    navigate('/')
  }

  const orderSummary = {
    items: [
      { name: "Classic Oxford Shirt", price: 79.99, quantity: 1 },
      { name: "Elegant Midi Dress", price: 129.99, quantity: 2 }
    ],
    subtotal: 339.97,
    shipping: 0,
    tax: 27.20,
    total: 367.17
  }

  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="container">
          <h1>Secure Checkout</h1>
          <div className="checkout-steps">
            <div className="step active">
              <span className="step-number">1</span>
              <span className="step-label">Information</span>
            </div>
            <div className="step-divider"></div>
            <div className="step active">
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className="step-divider"></div>
            <div className="step">
              <span className="step-number">3</span>
              <span className="step-label">Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-content container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <section className="form-section">
            <h2>Contact Information</h2>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          <section className="form-section">
            <h2>Shipping Address</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          <section className="form-section">
            <h2>Payment Information</h2>
            <div className="secure-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 5v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V5l-7-3z" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 10l2 2 4-4" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Secure SSL Encrypted Payment</span>
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardName">Name on Card *</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date *</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV *</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          <button type="submit" className="btn btn-primary place-order-btn">
            Place Order - ${orderSummary.total.toFixed(2)}
          </button>
        </form>

        <aside className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-items">
            {orderSummary.items.map((item, index) => (
              <div key={index} className="summary-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${orderSummary.subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{orderSummary.shipping === 0 ? 'FREE' : `$${orderSummary.shipping.toFixed(2)}`}</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>${orderSummary.tax.toFixed(2)}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${orderSummary.total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Checkout

