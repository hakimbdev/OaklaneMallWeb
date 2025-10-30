import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="contact-intro">
              Have a question or need assistance? Our customer service team is here to help.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 8l12 8 12-8M4 8v16h24V8" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="method-info">
                  <h3>Email</h3>
                  <p>hello@oaklanemall.com</p>
                  <p className="method-note">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 4h4l2 5-2 3a16 16 0 0 0 8 8l3-2 5 2v4a2 2 0 0 1-2 2A22 22 0 0 1 4 10a2 2 0 0 1 2-2z" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="method-info">
                  <h3>Phone</h3>
                  <p>1-800-OAKLANE</p>
                  <p className="method-note">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z" stroke="#8b5e3c" strokeWidth="2"/>
                    <path d="M16 8v8l4 4" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="method-info">
                  <h3>Live Chat</h3>
                  <p>Available on our website</p>
                  <p className="method-note">Instant support during business hours</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="22" cy="10" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24 8L8 24M8 8l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 14v8M10 11v.01M16 22v-6M20 22v-4a2 2 0 0 0-4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24 4h-4a6 6 0 0 0-6 6v4h-4v5h4v11h5V19h4l1-5h-5v-4a1 1 0 0 1 1-1h4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

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

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            ) : (
              <div className="form-success">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" stroke="#8b5e3c" strokeWidth="3"/>
                  <path d="M20 32l8 8 16-16" stroke="#8b5e3c" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

