import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import './Shop.css'

function Shop() {
  const [filters, setFilters] = useState({
    category: 'all',
    gender: 'all',
    size: 'all',
    priceRange: 'all',
    sortBy: 'featured'
  })
  
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    { id: 1, name: "Classic Oxford Shirt", category: "mens", gender: "men", price: 79.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", size: ["S", "M", "L", "XL"] },
    { id: 2, name: "Elegant Midi Dress", category: "womens", gender: "women", price: 129.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", size: ["XS", "S", "M", "L"] },
    { id: 3, name: "Leather Crossbody Bag", category: "accessories", gender: "all", price: 89.99, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80", size: ["One Size"] },
    { id: 4, name: "Slim Fit Chinos", category: "mens", gender: "men", price: 69.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80", size: ["30", "32", "34", "36"] },
    { id: 5, name: "Cashmere Sweater", category: "womens", gender: "women", price: 149.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80", size: ["XS", "S", "M", "L", "XL"] },
    { id: 6, name: "Minimalist Watch", category: "accessories", gender: "all", price: 199.99, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80", size: ["One Size"] },
    { id: 7, name: "Tailored Blazer", category: "mens", gender: "men", price: 189.99, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80", size: ["S", "M", "L", "XL", "XXL"] },
    { id: 8, name: "Silk Blouse", category: "womens", gender: "women", price: 99.99, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80", size: ["XS", "S", "M", "L"] },
    { id: 9, name: "Canvas Tote Bag", category: "accessories", gender: "all", price: 49.99, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80", size: ["One Size"] },
    { id: 10, name: "Denim Jacket", category: "mens", gender: "men", price: 119.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", size: ["S", "M", "L", "XL"] },
    { id: 11, name: "Pleated Skirt", category: "womens", gender: "women", price: 79.99, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80", size: ["XS", "S", "M", "L"] },
    { id: 12, name: "Sunglasses", category: "accessories", gender: "all", price: 159.99, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80", size: ["One Size"] }
  ]

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
  }

  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false
    if (filters.gender !== 'all' && product.gender !== 'all' && product.gender !== filters.gender) return false
    if (filters.priceRange === 'under50' && product.price >= 50) return false
    if (filters.priceRange === '50to100' && (product.price < 50 || product.price > 100)) return false
    if (filters.priceRange === '100to150' && (product.price < 100 || product.price > 150)) return false
    if (filters.priceRange === 'over150' && product.price <= 150) return false
    return true
  })

  return (
    <div className="shop">
      <div className="shop-header">
        <div className="container">
          <h1>Shop All Products</h1>
          <p>Discover our complete collection of timeless fashion</p>
        </div>
      </div>

      <div className="shop-content container">
        <button 
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 4h16M6 10h8M9 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Filters
        </button>

        <aside className={`filters ${showFilters ? 'show' : ''}`}>
          <div className="filter-header">
            <h3>Filters</h3>
            <button onClick={() => setShowFilters(false)} className="close-filters">×</button>
          </div>

          <div className="filter-group">
            <h4>Category</h4>
            <select value={filters.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
              <option value="all">All Categories</option>
              <option value="mens">Men's Wear</option>
              <option value="womens">Women's Wear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Gender</h4>
            <select value={filters.gender} onChange={(e) => handleFilterChange('gender', e.target.value)}>
              <option value="all">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <select value={filters.priceRange} onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="100to150">$100 - $150</option>
              <option value="over150">Over $150</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Sort By</h4>
            <select value={filters.sortBy} onChange={(e) => handleFilterChange('sortBy', e.target.value)}>
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </aside>

        <div className="products-section">
          <div className="products-header">
            <p className="results-count">{filteredProducts.length} Products</p>
          </div>

          <div className="products-grid grid grid-3">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No products found matching your filters.</p>
              <button className="btn btn-primary" onClick={() => setFilters({ category: 'all', gender: 'all', size: 'all', priceRange: 'all', sortBy: 'featured' })}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop

