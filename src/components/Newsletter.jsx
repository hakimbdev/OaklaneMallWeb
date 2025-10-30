import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Newsletter signup:', email)
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <h2>Join the Oaklane Circle</h2>
          <p>Get Exclusive Offers & New Drop Alerts</p>
          
          {!isSubmitted ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          ) : (
            <div className="newsletter-success">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#8b5e3c" strokeWidth="2"/>
                <path d="M8 12l2 2 4-4" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p>Thank you for subscribing!</p>
            </div>
          )}
          
          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

