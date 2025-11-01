import ProductCard from '../components/ProductCard'
import './NewArrivals.css'

function NewArrivals() {
  const newProducts = [
    // Caps (Kinde) - Accessories
    { id: 131, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0066_pet4fz.jpg", size: ["One Size"], isNew: true },
    { id: 132, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0062_v4jpgc.jpg", size: ["One Size"], isNew: true },
    { id: 133, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0065_m1t5zg.jpg", size: ["One Size"], isNew: true },
    { id: 134, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0059_zkgf3u.jpg", size: ["One Size"], isNew: true },
    { id: 135, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0061_fw9pn2.jpg", size: ["One Size"], isNew: true },
    { id: 136, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978802/IMG-20250921-WA0060_tu3was.jpg", size: ["One Size"], isNew: true },
    { id: 137, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978801/IMG-20250921-WA0057_lbaxtv.jpg", size: ["One Size"], isNew: true },
    { id: 138, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978801/IMG-20250921-WA0058_kohkju.jpg", size: ["One Size"], isNew: true },
    { id: 139, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978801/IMG-20250921-WA0054_ztkdpb.jpg", size: ["One Size"], isNew: true },
    { id: 140, name: "Caps (Kinde)", category: "accessories", gender: "all", price: 17000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761978801/IMG-20250921-WA0056_n9mmks.jpg", size: ["One Size"], isNew: true },
    // Flowing Gown - Women's Wear
    { id: 109, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977196/IMG-20250925-WA0098_ldukbx.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 110, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977195/IMG-20250925-WA0092_zkihwg.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 111, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977195/IMG-20250925-WA0097_lyecbg.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 112, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977195/IMG-20250925-WA0090_npetzz.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 113, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0096_xakzel.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 114, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0089_lqs5ge.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 115, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0095_tfvtmk.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 116, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977194/IMG-20250925-WA0094_gssccx.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 117, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977193/IMG-20250925-WA0093_okhtjj.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 118, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977193/IMG-20250925-WA0084_lljwvy.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 119, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977193/IMG-20250925-WA0088_chsnqh.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 120, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977192/IMG-20250925-WA0087_ibsbk2.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 121, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977192/IMG-20250925-WA0085_dj3bup.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 122, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977192/IMG-20250923-WA0245_ow3ngm.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 123, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977192/IMG-20250923-WA0244_w0h6t1.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 124, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977192/IMG-20250925-WA0086_rbxnrv.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 125, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977192/IMG-20250923-WA0246_avfqsr.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 126, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977191/IMG-20250923-WA0243_duoz9h.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 127, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977191/IMG-20250923-WA0241_e6qrfa.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 128, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977191/IMG-20250923-WA0242_gxrbv5.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 129, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977191/IMG-20250923-WA0240_ggjhsm.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 130, name: "Flowing Gown", category: "womens", gender: "women", price: 105000, image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1761977202/IMG-20250925-WA0091_tgx0qr.jpg", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 101, name: "Merino Wool Cardigan", category: "womens", gender: "women", price: 159.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", size: ["XS", "S", "M", "L"], isNew: true },
    { id: 102, name: "Linen Summer Shirt", category: "mens", gender: "men", price: 89.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", size: ["S", "M", "L", "XL"], isNew: true },
    { id: 103, name: "Structured Handbag", category: "accessories", gender: "all", price: 179.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80", size: ["One Size"], isNew: true },
    { id: 104, name: "Wide Leg Trousers", category: "womens", gender: "women", price: 99.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80", size: ["XS", "S", "M", "L", "XL"], isNew: true },
    { id: 105, name: "Suede Chelsea Boots", category: "mens", gender: "men", price: 219.99, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80", size: ["7", "8", "9", "10", "11"], isNew: true },
    { id: 106, name: "Gold Chain Necklace", category: "accessories", gender: "all", price: 129.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", size: ["One Size"], isNew: true },
    { id: 107, name: "Ribbed Knit Dress", category: "womens", gender: "women", price: 139.99, image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&q=80", size: ["XS", "S", "M", "L"], isNew: true },
    { id: 108, name: "Wool Overcoat", category: "mens", gender: "men", price: 299.99, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80", size: ["S", "M", "L", "XL"], isNew: true }
  ]

  return (
    <div className="new-arrivals">
      <div className="new-arrivals-header">
        <div className="container">
          <h1>New Arrivals</h1>
          <p>Discover the latest additions to our collection</p>
          <div className="arrival-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            <span>Fresh Styles Just Dropped</span>
          </div>
        </div>
      </div>

      <div className="new-arrivals-content container">
        <div className="products-grid grid grid-4">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Don't Miss Out</h2>
          <p>Subscribe to get notified about new arrivals and exclusive offers</p>
          <a href="#newsletter" className="btn btn-primary">Join Our Newsletter</a>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals

