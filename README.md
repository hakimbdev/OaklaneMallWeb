# Oaklane Store - E-Commerce Website

**"Where Everyday Style Finds Its Lane."**

A modern, responsive, and SEO-optimized e-commerce website for Oaklane Store, a premium clothing retail brand offering high-quality apparel for the modern lifestyle.

## 🌟 Features

- **Modern Design**: Clean, elegant interface with a focus on user experience
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **SEO Optimized**: Comprehensive meta tags and semantic HTML structure
- **Product Filtering**: Advanced filtering by category, gender, size, and price
- **Shopping Cart**: Full cart functionality with quantity management
- **Secure Checkout**: Multi-step checkout process with order summary
- **Newsletter Subscription**: Email capture for marketing campaigns
- **Contact Form**: Customer inquiry form with validation

## 🎨 Brand Identity

- **Primary Color**: Oak Brown (#8b5e3c)
- **Background**: Ivory White (#f9f6f2)
- **Accent**: Deep Navy (#0b2545)
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

## 📁 Project Structure

```
oaklane-mall/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Newsletter.jsx
│   │   ├── Newsletter.css
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Shop.jsx
│   │   ├── Shop.css
│   │   ├── NewArrivals.jsx
│   │   ├── NewArrivals.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Cart.jsx
│   │   ├── Cart.css
│   │   ├── Checkout.jsx
│   │   └── Checkout.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd oaklane-mall
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Netlify

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select your repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

3. **Manual Configuration** (if needed):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

The `netlify.toml` file is already configured with the correct build settings and redirects for client-side routing.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The production build is in the `dist` folder. You can deploy this folder to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📄 Pages

### Homepage (/)
- Hero section with call-to-action
- Featured collections grid
- About preview section
- Customer testimonials
- Newsletter subscription

### Shop (/shop)
- Product grid with 12+ items
- Advanced filtering system
- Sort by price, name, or featured
- Responsive product cards with wishlist and quick view

### New Arrivals (/new-arrivals)
- Latest product additions
- Fresh styles showcase
- Newsletter CTA

### About (/about)
- Brand story and mission
- Core values presentation
- Why choose Oaklane Store
- Feature highlights

### Contact (/contact)
- Contact information
- Inquiry form with validation
- Social media links
- Customer support details

### Cart (/cart)
- Shopping cart with item management
- Quantity adjustment
- Order summary
- Free shipping threshold indicator

### Checkout (/checkout)
- Multi-step checkout process
- Shipping information form
- Payment details (secure)
- Order summary sidebar

## 🎯 Key Components

### Header
- Sticky navigation
- Search functionality
- Mobile menu toggle
- Cart counter
- Account icon

### Footer
- Brand information
- Quick links
- Customer service links
- Social media integration
- Newsletter signup

### ProductCard
- Product image with hover effects
- Wishlist functionality
- Quick view overlay
- Add to cart button
- Price display

### Newsletter
- Email subscription form
- Success state handling
- Privacy notice

## 🔧 Technologies Used

- **React 18.2.0**: UI library
- **React Router DOM 6.20.0**: Client-side routing
- **Vite 5.0.8**: Build tool and dev server
- **CSS3**: Styling with custom properties
- **Google Fonts**: Playfair Display & Inter

## 🎨 Design Features

- **Mobile-First**: Responsive breakpoints at 480px, 768px, and 968px
- **CSS Grid & Flexbox**: Modern layout techniques
- **Smooth Transitions**: Enhanced user interactions
- **Hover Effects**: Interactive product cards and buttons
- **Sticky Elements**: Header and sidebar positioning
- **Form Validation**: Built-in HTML5 validation

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 968px
- **Large Desktop**: > 968px

## 🔍 SEO Features

- Meta description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Descriptive alt text for images
- Clean URL structure

## 🛠️ Customization

### Changing Brand Colors

Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --oak-brown: #8b5e3c;
  --ivory-white: #f9f6f2;
  --deep-navy: #0b2545;
  --light-gray: #d9d9d9;
}
```

### Adding Products

Edit the products array in `src/pages/Shop.jsx`:

```javascript
const products = [
  {
    id: 1,
    name: "Product Name",
    category: "mens",
    gender: "men",
    price: 99.99,
    image: "image-url",
    size: ["S", "M", "L", "XL"]
  }
]
```

## 📝 Future Enhancements

- Backend integration for product management
- User authentication and accounts
- Payment gateway integration
- Product reviews and ratings
- Wishlist persistence
- Order tracking
- Size guide
- Product recommendations
- Live chat support

## 📧 Contact

For questions or support, please contact:
- Email: hello@oaklanemall.com
- Phone: 1-800-OAKLANE

## 📄 License

This project is created for Oaklane Store. All rights reserved.

---

**Built with ❤️ for Oaklane Store**

