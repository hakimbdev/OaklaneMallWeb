import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import ProductCard from '../components/ProductCard'
import './Home.css'

function Home() {
  // Featured products - Caps (Kinde) collection
  const capsProducts = [
    { id: 131, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0066_pet4fz.jpg", size: ["One Size"], isNew: true },
    { id: 132, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0062_v4jpgc.jpg", size: ["One Size"], isNew: true },
    { id: 133, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0065_m1t5zg.jpg", size: ["One Size"], isNew: true },
    { id: 134, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0059_zkgf3u.jpg", size: ["One Size"], isNew: true },
    { id: 135, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0061_fw9pn2.jpg", size: ["One Size"], isNew: true },
    { id: 136, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0060_tu3was.jpg", size: ["One Size"], isNew: true },
    { id: 137, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978801/IMG-20250921-WA0057_lbaxtv.jpg", size: ["One Size"], isNew: true },
    { id: 138, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978801/IMG-20250921-WA0058_kohkju.jpg", size: ["One Size"], isNew: true }
  ]

  // Featured products - Flowing Gown collection
  const featuredProducts = [
    { id: 109, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977196/IMG-20250925-WA0098_ldukbx.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 110, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977195/IMG-20250925-WA0092_zkihwg.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 111, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977195/IMG-20250925-WA0097_lyecbg.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 112, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977195/IMG-20250925-WA0090_npetzz.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 113, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0096_xakzel.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 114, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0089_lqs5ge.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 115, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0095_tfvtmk.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 116, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0094_gssccx.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true }
  ]

  const collections = [
    {
      id: 1,
      title: "Men's Wear",
      description: "Timeless styles for the modern gentleman",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80",
      link: "/shop?category=mens"
    },
    {
      id: 2,
      title: "Women's Wear",
      description: "Elegant fashion for every occasion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      link: "/shop?category=womens"
    },
    {
      id: 3,
      title: "Accessories",
      description: "Complete your look with perfect details",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80",
      link: "/shop?category=accessories"
    },
    {
      id: 4,
      title: "Trending Now",
      description: "This season's must-have pieces",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      link: "/new-arrivals"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "New York, NY",
      text: "Oaklane Store has become my go-to for quality clothing. The curated collections make shopping effortless, and the quality is always exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "James Rodriguez",
      location: "Los Angeles, CA",
      text: "Finally, an online store that understands style and comfort. The fit is perfect, and the customer service is outstanding.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Chicago, IL",
      text: "I love the minimalist aesthetic and the attention to detail. Every piece I've purchased has exceeded my expectations.",
      rating: 5
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Shop Modern Clothing for Every Season</h1>
          <p className="hero-subtitle">
            Discover curated collections that blend timeless elegance with contemporary style
          </p>
          <Link to="/shop" className="btn btn-primary">Shop the Collection</Link>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Collections */}
      <section className="section featured-collections">
        <div className="container">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">
            Explore our carefully curated selections designed for your lifestyle
          </p>

          <div className="collections-grid grid grid-4">
            {collections.map(collection => (
              <Link to={collection.link} key={collection.id} className="collection-card">
                <div className="collection-image">
                  <img src={collection.image} alt={collection.title} />
                  <div className="collection-overlay">
                    <span className="collection-cta">Explore Now</span>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Caps (Kinde) Collection */}
      <section className="section featured-products">
        <div className="container">
          <h2 className="section-title">New Arrivals - Caps (Kinde)</h2>
          <p className="section-subtitle">
            Stylish caps to complete your look - Perfect for any casual occasion
          </p>

          <div className="products-grid grid grid-4">
            {capsProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/new-arrivals" className="btn btn-primary">View All New Arrivals</Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Flowing Gown */}
      <section className="section featured-products">
        <div className="container">
          <h2 className="section-title">New Arrivals - Flowing Gown Collection</h2>
          <p className="section-subtitle">
            Discover our latest elegant flowing gowns, perfect for any special occasion
          </p>

          <div className="products-grid grid grid-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/new-arrivals" className="btn btn-primary">View All New Arrivals</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Oaklane Store</h2>
              <p className="tagline">Where Everyday Style Finds Its Lane.</p>
              <p>
                At Oaklane Store, we believe that fashion should be accessible, elegant, and effortless. 
                Our mission is to simplify your shopping experience by offering carefully curated collections 
                of high-quality apparel that blend timeless style with modern comfort.
              </p>
              <p>
                We're committed to providing you with clothing that not only looks great but feels great too. 
                Every piece is selected with care, ensuring that you receive the best in quality, fit, and design.
              </p>
              <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" alt="Oaklane Store Store" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied shoppers who trust Oaklane Store
          </p>
          
          <div className="testimonials-grid grid grid-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#8b5e3c">
                      <path d="M10 1l2.5 6.5L19 8l-5 4.5L15.5 19 10 15l-5.5 4L6 12.5 1 8l6.5-.5L10 1z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default Home

