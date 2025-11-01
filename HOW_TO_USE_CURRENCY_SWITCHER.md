# How to Use the Currency Switcher

## For Customers

### Changing Your Currency

1. **Locate the Currency Switcher**
   - Look at the top right of the page in the header
   - You'll see a button with a globe icon and your current currency (e.g., "USD")

2. **Open the Currency Menu**
   - Click on the currency button
   - A dropdown menu will appear showing all available currencies

3. **Select Your Preferred Currency**
   - Click on any currency from the list:
     - **USD** - US Dollar
     - **NGN** - Nigerian Naira
     - **EUR** - Euro
     - **GBP** - British Pound
   - The menu will close automatically

4. **See Updated Prices**
   - All prices on the website will instantly update to your selected currency
   - This includes:
     - Product prices on all pages
     - Shopping cart totals
     - Checkout summary
     - Shipping and tax calculations

5. **Your Preference is Saved**
   - Your currency choice is automatically saved
   - When you return to the site, your preferred currency will still be selected
   - No need to change it every time you visit!

### Where You'll See Currency Changes

✅ **Homepage**
- Featured product prices
- New arrivals section

✅ **Shop Page**
- All product cards
- Filter results

✅ **New Arrivals Page**
- All new product listings
- Flowing Gown collection

✅ **Shopping Cart**
- Individual item prices
- Subtotal
- Shipping costs
- Tax
- Grand total

✅ **Checkout Page**
- Order summary
- Item prices
- Final total on "Place Order" button

### Example Price Conversions

If a product costs **$100 USD**, here's what you'll see in other currencies:

- **USD**: $100.00
- **NGN**: ₦165,000
- **EUR**: €92.00
- **GBP**: £79.00

### Mobile Users

On mobile devices:
- The currency switcher is still in the header
- It may appear slightly smaller to fit your screen
- All functionality remains the same
- Tap to open, tap to select

### Tips

💡 **Quick Access**: The currency switcher is always visible in the header, no matter which page you're on

💡 **Instant Updates**: No page reload needed - prices update immediately

💡 **Persistent Choice**: Your selection is remembered even if you close your browser

💡 **Accurate Conversions**: All prices are converted using current exchange rates

### Troubleshooting

**Q: The currency didn't change when I clicked it**
- Make sure you clicked on a different currency than the one currently selected
- Try refreshing the page

**Q: Prices look wrong after switching**
- This is normal - different currencies have different values
- For example, NGN amounts are much larger than USD amounts

**Q: My currency preference wasn't saved**
- Make sure your browser allows localStorage
- Check that you're not in private/incognito mode

**Q: I don't see my country's currency**
- Currently supported: USD, NGN, EUR, GBP
- More currencies may be added in future updates

### Need Help?

If you experience any issues with the currency switcher:
1. Try refreshing the page
2. Clear your browser cache
3. Contact customer support through the Contact page

---

## For Store Administrators

### Updating Exchange Rates

1. Open `src/context/CurrencyContext.jsx`
2. Locate the `EXCHANGE_RATES` object
3. Update the values as needed
4. Save the file
5. Redeploy the application

### Adding New Currencies

See the `CURRENCY_FEATURE.md` file for detailed instructions on adding new currencies.

### Monitoring Currency Usage

Currently, currency selection is stored locally on each user's device. To track which currencies are most popular, you would need to implement analytics tracking.

---

**Last Updated**: November 1, 2025
**Version**: 1.0.0

