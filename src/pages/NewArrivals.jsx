import ProductCard from '../components/ProductCard'
import './NewArrivals.css'

function NewArrivals() {
  const newProducts = [
    { id: 101, name: "Merino Wool Cardigan", category: "womens", gender: "women", price: 159.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", size: ["XS", "S", "M", "L"], isNew: true },
    { id: 102, name: "Linen Summer Shirt", category: "mens", gender: "men", price: 89.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", size: ["S", "M", "L", "XL"], isNew: true },
    { id: 103, name: "Structured Handbag", category: "accessories", gender: "all", price: 179.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80", size: ["One Size"], isNew: true },
    { id: 104, name: "Wide Leg Trousers", category: "womens", gender: "women", price: 99.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 105, name: "Suede Chelsea Boots", category: "mens", gender: "men", price: 219.99, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80", size: ["7", "8", "9", "10", "11"], isNew: true },
    { id: 106, name: "Gold Chain Necklace", category: "accessories", gender: "all", price: 129.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", size: ["One Size"], isNew: true },
    { id: 107, name: "Ribbed Knit Dress", category: "womens", gender: "women", price: 139.99, image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&q=80", size: ["XS", "S", "M", "L"], isNew: true },
    { id: 108, name: "Wool Overcoat", category: "mens", gender: "men", price: 299.99, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80", size: ["S", "M", "L", "XL"], isNew: true }
  ]

  return (
    <div className="new-arrivals">
      <div className="new-arrivals-header">
        <div className="container">
          <h1>New Arrivals</h1>
          <p>Discover the latest additions to our collection</p>
          <div className="arrival-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            <span>Fresh Styles Just Dropped</span>
          </div>
        </div>
      </div>

      <div className="new-arrivals-content container">
        <div className="products-grid grid grid-4">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Don't Miss Out</h2>
          <p>Subscribe to get notified about new arrivals and exclusive offers</p>
          <a href="#newsletter" className="btn btn-primary">Join Our Newsletter</a>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals

