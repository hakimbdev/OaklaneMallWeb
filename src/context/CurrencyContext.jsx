import { createContext, useContext, useState, useEffect } from 'react'

const CurrencyContext = createContext()

// Exchange rates (you can update these or fetch from an API)
const EXCHANGE_RATES = {
  USD: 1,
  NGN: 1650, // 1 USD = 1650 NGN (approximate rate)
  EUR: 0.92, // 1 USD = 0.92 EUR
  GBP: 0.79, // 1 USD = 0.79 GBP
}

const CURRENCY_SYMBOLS = {
  USD: '$',
  NGN: '₦',
  EUR: '€',
  GBP: '£',
}

export function CurrencyProvider({ children }) {
  // Get saved currency from localStorage or default to USD
  const [currency, setCurrency] = useState(() => {
    const saved = localStorage.getItem('selectedCurrency')
    return saved || 'USD'
  })

  // Save currency preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedCurrency', currency)
  }, [currency])

  // Convert price from base currency (USD) to selected currency
  const convertPrice = (priceInUSD) => {
    return priceInUSD * EXCHANGE_RATES[currency]
  }

  // Format price with currency symbol
  const formatPrice = (price) => {
    // If price is already in NGN (>= 1000), convert to USD first
    let priceInUSD = price
    if (price >= 1000) {
      priceInUSD = price / EXCHANGE_RATES.NGN
    }

    const convertedPrice = convertPrice(priceInUSD)
    const symbol = CURRENCY_SYMBOLS[currency]

    // Format with appropriate decimal places
    if (currency === 'NGN') {
      return `${symbol}${Math.round(convertedPrice).toLocaleString()}`
    } else {
      return `${symbol}${convertedPrice.toFixed(2)}`
    }
  }

  const value = {
    currency,
    setCurrency,
    convertPrice,
    formatPrice,
    availableCurrencies: Object.keys(EXCHANGE_RATES),
    currencySymbol: CURRENCY_SYMBOLS[currency],
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}

