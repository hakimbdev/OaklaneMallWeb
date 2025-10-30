import './About.css'

function About() {
  const values = [
    {
      icon: "✨",
      title: "Quality First",
      description: "We carefully curate every piece to ensure the highest standards of craftsmanship and materials."
    },
    {
      icon: "🎯",
      title: "Timeless Style",
      description: "Our collections focus on classic designs that transcend seasonal trends and stand the test of time."
    },
    {
      icon: "💚",
      title: "Sustainable Choices",
      description: "We're committed to ethical sourcing and sustainable practices in everything we do."
    },
    {
      icon: "🤝",
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to make your shopping experience exceptional."
    }
  ]

  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About Oaklane Mall</h1>
          <p className="tagline">Where Everyday Style Finds Its Lane.</p>
        </div>
      </div>

      <section className="section about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Oaklane Mall Story" />
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to simplify fashion shopping, Oaklane Mall was born from the belief 
                that everyone deserves access to quality, stylish clothing without the hassle of endless searching.
              </p>
              <p>
                We understand that modern life is busy, and shopping for the perfect outfit shouldn't add to 
                your stress. That's why we've created a carefully curated collection that brings together the 
                best in contemporary fashion, all in one convenient place.
              </p>
              <p>
                Our team of fashion experts scours the globe to find pieces that combine timeless elegance 
                with modern comfort. Every item in our collection is chosen with care, ensuring that you 
                receive only the finest quality and the most versatile styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            To create a seamless shopping experience where fashion meets comfort, providing high-quality 
            apparel for the modern lifestyle. We believe in making style accessible, elegant, and effortless 
            for everyone.
          </p>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Why Choose Oaklane Mall?</h2>
          <div className="features-grid grid grid-3">
            <div className="feature-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#8b5e3c" strokeWidth="2"/>
                <path d="M16 24l6 6 10-12" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3>Curated Collections</h3>
              <p>Every piece is handpicked by our fashion experts to ensure quality and style.</p>
            </div>
            <div className="feature-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="#8b5e3c" strokeWidth="2"/>
                <path d="M16 24h16M24 16v16" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3>Easy Returns</h3>
              <p>Not satisfied? We offer hassle-free returns within 30 days of purchase.</p>
            </div>
            <div className="feature-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 8v32M8 24h32" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="16" stroke="#8b5e3c" strokeWidth="2"/>
              </svg>
              <h3>Fast Shipping</h3>
              <p>Get your orders delivered quickly with our reliable shipping partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Discover Your Style?</h2>
          <p>Explore our collections and find pieces that speak to you.</p>
          <a href="/shop" className="btn btn-primary">Start Shopping</a>
        </div>
      </section>
    </div>
  )
}

export default About

