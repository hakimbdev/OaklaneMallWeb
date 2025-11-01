# Currency Switcher Feature

## Overview
The Oaklane Mall e-commerce platform now includes a comprehensive multi-currency support system that allows customers to view prices in their preferred currency.

## Supported Currencies
- **USD** - US Dollar ($)
- **NGN** - Nigerian Naira (₦)
- **EUR** - Euro (€)
- **GBP** - British Pound (£)

## Features

### 1. Global Currency Context
- Centralized currency management using React Context API
- Persistent currency selection (saved in localStorage)
- Automatic price conversion across all components

### 2. Currency Switcher Component
- Located in the header for easy access
- Dropdown interface with all available currencies
- Visual indicator showing currently selected currency
- Smooth animations and transitions

### 3. Smart Price Formatting
- Automatic detection of base currency
- Proper decimal formatting for each currency
- Locale-aware number formatting with commas
- Currency-specific rounding (whole numbers for NGN, 2 decimals for others)

### 4. Exchange Rates
Current exchange rates (can be updated in `src/context/CurrencyContext.jsx`):
```javascript
USD: 1 (base currency)
NGN: 1650 (1 USD = 1650 NGN)
EUR: 0.92 (1 USD = 0.92 EUR)
GBP: 0.79 (1 USD = 0.79 GBP)
```

## Implementation Details

### Files Created/Modified

#### New Files:
1. **src/context/CurrencyContext.jsx**
   - Currency context provider
   - Price conversion logic
   - Currency formatting functions
   - localStorage integration

2. **src/components/CurrencySwitcher.jsx**
   - Currency dropdown component
   - Click-outside detection
   - Active currency indicator

3. **src/components/CurrencySwitcher.css**
   - Styling for currency switcher
   - Dropdown animations
   - Responsive design

4. **CURRENCY_FEATURE.md**
   - This documentation file

#### Modified Files:
1. **src/App.jsx**
   - Wrapped app with CurrencyProvider

2. **src/components/Header.jsx**
   - Added CurrencySwitcher component

3. **src/components/ProductCard.jsx**
   - Integrated useCurrency hook
   - Dynamic price formatting

4. **src/pages/Cart.jsx**
   - Updated all price displays
   - Currency-aware calculations

5. **src/pages/Checkout.jsx**
   - Updated order summary
   - Currency-aware total display

## Usage

### For Customers
1. Click on the currency selector in the header (shows current currency code)
2. Select desired currency from the dropdown
3. All prices throughout the site will update automatically
4. Currency preference is saved and persists across sessions

### For Developers

#### Using the Currency Context
```jsx
import { useCurrency } from '../context/CurrencyContext'

function MyComponent() {
  const { currency, setCurrency, formatPrice } = useCurrency()
  
  // Format a price
  const displayPrice = formatPrice(99.99)
  
  // Change currency
  setCurrency('NGN')
  
  return <div>{displayPrice}</div>
}
```

#### Available Context Values
- `currency` - Current selected currency code (string)
- `setCurrency(code)` - Function to change currency
- `formatPrice(price)` - Function to format price with currency symbol
- `convertPrice(priceInUSD)` - Function to convert USD to selected currency
- `availableCurrencies` - Array of available currency codes
- `currencySymbol` - Symbol for current currency

#### Updating Exchange Rates
Edit the `EXCHANGE_RATES` object in `src/context/CurrencyContext.jsx`:
```javascript
const EXCHANGE_RATES = {
  USD: 1,
  NGN: 1650, // Update this value
  EUR: 0.92,
  GBP: 0.79,
}
```

#### Adding New Currencies
1. Add exchange rate to `EXCHANGE_RATES`
2. Add currency symbol to `CURRENCY_SYMBOLS`
3. Add currency name to `currencyNames` in CurrencySwitcher.jsx

Example:
```javascript
// In CurrencyContext.jsx
const EXCHANGE_RATES = {
  USD: 1,
  NGN: 1650,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.35, // New currency
}

const CURRENCY_SYMBOLS = {
  USD: '$',
  NGN: '₦',
  EUR: '€',
  GBP: '£',
  CAD: 'C$', // New symbol
}

// In CurrencySwitcher.jsx
const currencyNames = {
  USD: 'US Dollar',
  NGN: 'Nigerian Naira',
  EUR: 'Euro',
  GBP: 'British Pound',
  CAD: 'Canadian Dollar', // New name
}
```

## Price Conversion Logic

### Base Currency Detection
The system automatically detects if a price is in NGN (prices >= 1000) or USD (prices < 1000) and converts accordingly:

```javascript
// If price is already in NGN (>= 1000), convert to USD first
let priceInUSD = price
if (price >= 1000) {
  priceInUSD = price / EXCHANGE_RATES.NGN
}

// Then convert to selected currency
const convertedPrice = priceInUSD * EXCHANGE_RATES[currency]
```

### Formatting Rules
- **NGN**: Rounded to whole numbers with comma separators (₦105,000)
- **USD/EUR/GBP**: 2 decimal places ($99.99, €91.99, £78.41)

## Testing

### Manual Testing Checklist
- [ ] Currency switcher appears in header
- [ ] Dropdown opens/closes correctly
- [ ] All 4 currencies are selectable
- [ ] Product prices update when currency changes
- [ ] Cart totals update correctly
- [ ] Checkout summary reflects selected currency
- [ ] Currency preference persists after page reload
- [ ] Mobile responsive design works
- [ ] No console errors

### Test Scenarios
1. **Homepage**: Check featured products display correct currency
2. **Shop Page**: Verify all product cards show selected currency
3. **New Arrivals**: Confirm Flowing Gown prices convert correctly
4. **Cart**: Test subtotal, shipping, tax, and total calculations
5. **Checkout**: Verify order summary and place order button
6. **Currency Switch**: Change currency and verify all pages update

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Performance Considerations
- Currency preference cached in localStorage
- No API calls for exchange rates (static rates)
- Minimal re-renders using React Context
- Efficient price calculations

## Future Enhancements
- [ ] Real-time exchange rate API integration
- [ ] Automatic currency detection based on user location
- [ ] More currency options (JPY, AUD, etc.)
- [ ] Currency conversion history
- [ ] Admin panel to update exchange rates

## Support
For issues or questions about the currency feature, please check:
1. Browser console for errors
2. localStorage for saved currency preference
3. CurrencyContext.jsx for exchange rates
4. This documentation for usage examples

## Version History
- **v1.0.0** (2025-11-01): Initial implementation
  - 4 currencies supported (USD, NGN, EUR, GBP)
  - Global currency context
  - Header currency switcher
  - Full integration across all pages

