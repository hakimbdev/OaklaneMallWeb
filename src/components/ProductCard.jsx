import { useState } from 'react'
import { useCurrency } from '../context/CurrencyContext'
import './ProductCard.css'

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { formatPrice } = useCurrency()

  const handleAddToCart = () => {
    console.log('Added to cart:', product)
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={toggleWishlist}
          aria-label="Add to wishlist"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="product-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 2L5 5M15 5l-2-3M5 5h10l1.5 7.5H3.5L5 5zM7 17.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM14 17.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

