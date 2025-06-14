
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
const productData = {
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
