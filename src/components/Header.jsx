import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="header-top">
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link to="/" className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#8b5e3c" strokeWidth="2"/>
              <path d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8Z" fill="#8b5e3c"/>
              <text x="20" y="26" fontSize="16" fill="#f9f6f2" textAnchor="middle" fontFamily="Playfair Display" fontWeight="600">O</text>
            </svg>
            <span className="logo-text">Oaklane Mall</span>
          </Link>

          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="search" 
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </form>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Account">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 2L7 6M17 6l-2-4M6 6h12l1.5 9H4.5L6 6zM9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
          <Link to="/new-arrivals" className={location.pathname === '/new-arrivals' ? 'active' : ''}>New Arrivals</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

