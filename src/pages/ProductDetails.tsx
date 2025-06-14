import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Star, Heart, ShoppingBag, ArrowLeft, Share2, Truck, Shield, RotateCcw, ZoomIn, Eye, Gift, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  // Add more products as needed
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

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

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Breadcrumb */}
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

      {/* Enhanced Product Detail Section */}
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
            {/* Enhanced Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={() => setIsZoomed(true)}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                {product.originalPrice && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                    {discountPercentage}% OFF
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === index ? 'border-amber-600 shadow-lg' : 'border-transparent hover:border-amber-300'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-amber-800 border-amber-800">
                      {product.brand}
                    </Badge>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {product.name}
                    </h1>
                    <p className="text-gray-600">SKU: {product.sku}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleShare}
                    className="hover:bg-amber-50 text-amber-800"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-lg font-semibold ml-2">{product.rating}</span>
                  </div>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                  <Button variant="link" className="text-amber-800 p-0 h-auto">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Write a review
                  </Button>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-700 font-medium">In Stock ({product.stockCount} available)</span>
                    </>
                  ) : (
                    <>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-red-700 font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Enhanced Size Selection */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`border-2 px-6 py-3 rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? 'border-amber-600 bg-amber-600 text-white shadow-lg'
                            : 'border-gray-300 hover:border-amber-600 hover:text-amber-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Color Selection */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                          selectedColor === color
                            ? 'border-amber-600 bg-amber-50 text-amber-800 shadow-lg'
                            : 'border-gray-300 hover:border-amber-600 hover:bg-amber-50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Quantity */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 hover:bg-gray-50 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 hover:bg-gray-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-gray-600">
                      Total: <span className="font-semibold text-lg">${(product.price * quantity).toFixed(2)}</span>
                    </span>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="space-y-4 pt-6">
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleBuyNow}
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Buy Now
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={handleAddToCart}
                      className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 py-4 text-lg font-semibold rounded-xl"
                      disabled={!product.inStock}
                    >
                      Add to Cart
                    </Button>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      onClick={handleAddToWishlist}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                        isWishlisted 
                          ? 'bg-pink-50 border-pink-300 text-pink-700 hover:bg-pink-100' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                      {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 py-3 rounded-xl font-medium hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"
                    >
                      <Gift className="h-4 w-4 mr-2" />
                      Gift This Item
                    </Button>
                  </div>
                </div>

                {/* Enhanced Service Info */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div className="text-center space-y-2">
                    <Truck className="h-8 w-8 text-amber-600 mx-auto" />
                    <p className="text-sm font-semibold">Free Shipping</p>
                    <p className="text-xs text-gray-600">On orders over $100</p>
                  </div>
                  <div className="text-center space-y-2">
                    <RotateCcw className="h-8 w-8 text-amber-600 mx-auto" />
                    <p className="text-sm font-semibold">Easy Returns</p>
                    <p className="text-xs text-gray-600">30-day return policy</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield className="h-8 w-8 text-amber-600 mx-auto" />
                    <p className="text-sm font-semibold">Secure Payment</p>
                    <p className="text-xs text-gray-600">SSL protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Details Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white rounded-xl p-1 shadow-sm">
              <TabsTrigger value="description" className="rounded-lg">Description</TabsTrigger>
              <TabsTrigger value="specifications" className="rounded-lg">Specifications</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-lg">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {product.longDescription}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                <div className="text-center py-12">
                  <Eye className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Reviews will be displayed here</p>
                  <Button className="mt-4 bg-amber-600 hover:bg-amber-700">
                    Write First Review
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You May Also Like
            </h2>
            <p className="text-gray-600 text-lg">Discover more beautiful products from our collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
