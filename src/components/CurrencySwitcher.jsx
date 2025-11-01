import { useState, useRef, useEffect } from 'react'
import { useCurrency } from '../context/CurrencyContext'
import './CurrencySwitcher.css'

function CurrencySwitcher() {
  const { currency, setCurrency, availableCurrencies } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency)
    setIsOpen(false)
  }

  const currencyNames = {
    USD: 'US Dollar',
    NGN: 'Nigerian Naira',
    EUR: 'Euro',
    GBP: 'British Pound',
  }

  return (
    <div className="currency-switcher" ref={dropdownRef}>
      <button 
        className="currency-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select currency"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <circle cx="10" cy="10" r="8" strokeWidth="1.5"/>
          <path d="M10 2v16M2 10h16" strokeWidth="1.5"/>
        </svg>
        <span className="currency-code">{currency}</span>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none"
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="currency-dropdown">
          {availableCurrencies.map((curr) => (
            <button
              key={curr}
              className={`currency-option ${curr === currency ? 'active' : ''}`}
              onClick={() => handleCurrencyChange(curr)}
            >
              <span className="currency-code-option">{curr}</span>
              <span className="currency-name">{currencyNames[curr]}</span>
              {curr === currency && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CurrencySwitcher

