
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductOptions from '@/components/product/ProductOptions';
import ProductActions from '@/components/product/ProductActions';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useWishlist } from '@/contexts/WishlistContext';

// Sample product data - in real app this would come from API
const productData: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Designer Silk Saree',
    price: 299,
    originalPrice: 399,
    brand: 'ALLIRAA',
    rating: 4.9,
    reviews: 234,
    description: 'This exquisite designer silk saree combines traditional craftsmanship with contemporary style. Made from premium silk fabric, it features intricate embroidery and delicate patterns that make it perfect for special occasions.',
    longDescription: 'Crafted with meticulous attention to detail, this designer silk saree represents the perfect fusion of traditional Indian craftsmanship and modern aesthetic sensibilities. The luxurious silk fabric drapes beautifully, while the intricate embroidery work showcases the skill of master artisans. Each piece tells a story of heritage and elegance, making it an ideal choice for weddings, festivals, and special celebrations.',
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green', 'Golden'],
    features: [
      'Premium silk fabric',
      'Hand-embroidered details',
      'Traditional design',
      'Comfortable fit',
      'Easy care instructions',
      'Breathable material'
    ],
    specifications: {
      'Material': 'Premium Silk',
      'Work': 'Hand Embroidered',
      'Occasion': 'Festival, Wedding',
      'Care': 'Dry Clean Only',
      'Origin': 'India',
      'Weight': '800g'
    },
    inStock: true,
    stockCount: 15,
    sku: 'DSS001',
    category: 'Sarees'
  },
  // Pouch Bag Products
  '13': {
    id: '13',
    name: 'Waterproof Travel Organizer Pouch',
    price: 35,
    originalPrice: 45,
    brand: 'TravelEase',
    rating: 4.9,
    reviews: 342,
    description: 'Premium waterproof travel organizer with multiple compartments. Perfect for keeping your essentials organized during trips. Durable, lightweight, and stylish.',
    longDescription: 'This versatile travel organizer pouch features waterproof material to protect your belongings from moisture and spills. With multiple zippered compartments and mesh pockets, it keeps everything from toiletries to electronics neatly organized. The durable construction ensures long-lasting use, while the sleek design makes it perfect for both business and leisure travel.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop'
    ],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Black', 'Navy', 'Gray'],
    features: [
      'Waterproof exterior',
      'Multiple compartments',
      'Lightweight design',
      'Durable zippers',
      'Easy to clean',
      'Compact and portable'
    ],
    specifications: {
      'Material': 'Waterproof Nylon',
      'Compartments': '5 Zippered Sections',
      'Dimensions': '10" x 7" x 3"',
      'Weight': '180g',
      'Care': 'Wipe Clean',
      'Warranty': '1 Year'
    },
    inStock: true,
    stockCount: 28,
    sku: 'TPB013',
    category: 'Pouch Bags'
  },
  '17': {
    id: '17',
    name: 'Professional Makeup Organizer Pouch',
    price: 42,
    originalPrice: 55,
    brand: 'BeautyPro',
    rating: 4.8,
    reviews: 456,
    description: 'Elegant makeup organizer pouch with compartments for brushes, palettes, and cosmetics. Features premium materials and stylish design.',
    longDescription: 'Designed for makeup enthusiasts and professionals, this organizer pouch features dedicated sections for brushes, palettes, lipsticks, and more. The luxurious interior lining protects your cosmetics, while the sturdy construction keeps everything secure. Perfect for travel or daily use at your vanity.',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563278047-4996d0ffa18a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop'
    ],
    sizes: ['Medium', 'Large'],
    colors: ['Pink', 'Rose Gold', 'Silver'],
    features: [
      'Premium velvet interior',
      'Brush holder compartment',
      'Mirror included',
      'Secure zipper closure',
      'Dust resistant',
      'Elegant design'
    ],
    specifications: {
      'Material': 'Vegan Leather & Velvet',
      'Interior': 'Soft Velvet Lining',
      'Dimensions': '9" x 6" x 4"',
      'Weight': '220g',
      'Mirror': 'Built-in',
      'Care': 'Spot Clean'
    },
    inStock: true,
    stockCount: 34,
    sku: 'MPB017',
    category: 'Pouch Bags'
  },
  '21': {
    id: '21',
    name: 'Genuine Leather Zip Pouch',
    price: 78,
    originalPrice: 95,
    brand: 'LeatherCraft',
    rating: 4.9,
    reviews: 523,
    description: 'Handcrafted genuine leather pouch with premium finish. Features brass zipper and soft interior lining. Perfect for valuables and everyday essentials.',
    longDescription: 'This exquisite leather pouch is handcrafted from genuine full-grain leather that develops a beautiful patina over time. The brass zipper ensures smooth operation, while the soft suede interior protects your belongings. Each piece is unique, showcasing the natural characteristics of premium leather. Ideal for storing jewelry, tech accessories, or daily essentials.',
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564422167509-4f9d69f7f3b8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=800&fit=crop'
    ],
    sizes: ['Small', 'Medium'],
    colors: ['Cognac', 'Black', 'Burgundy'],
    features: [
      'Genuine full-grain leather',
      'Brass YKK zipper',
      'Suede interior lining',
      'Handcrafted quality',
      'Develops natural patina',
      'Durable construction'
    ],
    specifications: {
      'Material': 'Full-Grain Leather',
      'Hardware': 'Brass Zipper',
      'Interior': 'Soft Suede',
      'Dimensions': '8" x 5" x 1"',
      'Weight': '150g',
      'Care': 'Leather Conditioner'
    },
    inStock: true,
    stockCount: 19,
    sku: 'LPB021',
    category: 'Pouch Bags'
  },
  '27': {
    id: '27',
    name: 'Bohemian Mandala Print Pouch',
    price: 42,
    originalPrice: 55,
    brand: 'BohoStyle',
    rating: 4.9,
    reviews: 498,
    description: 'Vibrant bohemian-style pouch with intricate mandala print. Made from durable canvas with colorful patterns. Perfect for carrying essentials with style.',
    longDescription: 'Express your unique style with this stunning bohemian mandala print pouch. Featuring vibrant colors and intricate patterns inspired by traditional mandala art, this pouch is both functional and fashionable. The durable canvas construction ensures long-lasting use, while the spacious interior accommodates all your daily essentials. Perfect for festivals, travel, or everyday use.',
    images: [
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1585916420730-d7f95e942d46?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564422167509-4f9d69f7f3b8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop'
    ],
    sizes: ['Small', 'Medium'],
    colors: ['Boho Red', 'Boho Purple', 'Boho Turquoise'],
    features: [
      'Intricate mandala design',
      'Durable canvas material',
      'Vibrant fade-resistant colors',
      'Spacious interior',
      'Zipper closure',
      'Eco-friendly materials'
    ],
    specifications: {
      'Material': 'Premium Canvas',
      'Print': 'Digital Mandala Pattern',
      'Dimensions': '9" x 6" x 2"',
      'Weight': '140g',
      'Care': 'Hand Wash',
      'Origin': 'Fair Trade'
    },
    inStock: true,
    stockCount: 42,
    sku: 'PPB027',
    category: 'Pouch Bags'
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Get product data (fallback to default if ID not found)
  const product = productData[id as keyof typeof productData] || productData['1'];
  const isWishlisted = isInWishlist(product.id);

  const relatedProducts = [
    {
      id: '2',
      name: 'Premium Cotton Kurti',
      price: 149,
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop',
      rating: 4.6
    },
    {
      id: '3',
      name: 'Elegant Evening Dress',
      price: 349,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: '4',
      name: 'Traditional Lehenga',
      price: 499,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
      rating: 4.7
    },
    {
      id: '5',
      name: 'Fusion Palazzo Set',
      price: 199,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.5
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both size and color before adding to cart",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`
    });
  };

  const handleAddToWishlist = () => {
    const wishlistProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      badge: product.category,
      rating: product.rating
    };

    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist`
      });
    } else {
      addToWishlist(wishlistProduct);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist`
      });
    }
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both size and color before proceeding",
        variant: "destructive"
      });
      return;
    }

    // Redirect to checkout or cart
    navigate('/cart');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this ${product.name} for $${product.price}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Product link copied to clipboard"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-amber-800 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/shop')} className="hover:text-amber-800 transition-colors">Shop</button>
            <span>/</span>
            <span className="text-amber-800">{product.category}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            onClick={() => navigate(-1)}
            variant="ghost" 
            className="mb-6 hover:bg-amber-50 text-amber-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <ProductImageGallery
              images={product.images}
              productName={product.name}
              originalPrice={product.originalPrice}
              price={product.price}
            />

            {/* Product Info */}
            <div className="space-y-8">
              <ProductInfo
                brand={product.brand}
                name={product.name}
                sku={product.sku}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                originalPrice={product.originalPrice}
                inStock={product.inStock}
                stockCount={product.stockCount}
                onShare={handleShare}
              />

              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>

                <ProductOptions
                  sizes={product.sizes}
                  colors={product.colors}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  quantity={quantity}
                  price={product.price}
                  onSizeChange={setSelectedSize}
                  onColorChange={setSelectedColor}
                  onQuantityChange={setQuantity}
                />

                <ProductActions
                  inStock={product.inStock}
                  isWishlisted={isWishlisted}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                  onAddToWishlist={handleAddToWishlist}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <ProductTabs
        longDescription={product.longDescription}
        features={product.features}
        specifications={product.specifications}
      />

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <Footer />
    </div>
  );
};

export default ProductDetails;
