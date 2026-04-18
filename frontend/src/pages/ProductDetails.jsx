import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, MessageCircle, Phone, Share2, Heart } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  };

  const handleWhatsAppInquiry = () => {
    if (product) {
      const message = `Hi, I'm interested in ${product.name} (${product.category}) priced at ₹${product.price.toLocaleString()}`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at Santosh Jewellers`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Product not found</p>
          <Link to="/shop" className="text-amber-700 hover:text-amber-800 font-medium">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-32 md:mt-36 py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-4">
                <div className="aspect-square relative">
                  <img
                    src={product.images[currentImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-6 right-6 bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`flex-1 aspect-square rounded-2xl overflow-hidden border-4 transition-all ${
                        currentImage === index ? 'border-amber-600' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <p className="text-sm text-amber-700 font-semibold uppercase tracking-wider mb-3">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                <div className="flex items-baseline gap-4 mb-6">
                  <p className="text-4xl font-bold text-amber-700">₹{product.price.toLocaleString()}</p>
                  <span className="text-lg text-gray-600">({product.weight}g)</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-amber-50 rounded-2xl">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Purity</p>
                    <p className="text-lg font-bold text-amber-800">{product.purity} Gold</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Weight</p>
                    <p className="text-lg font-bold text-amber-800">{product.weight} grams</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Category</p>
                    <p className="text-lg font-bold text-amber-800 capitalize">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Stock</p>
                    <p className={`text-lg font-bold ${
                      product.inStock ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Inquire on WhatsApp
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleCall}
                      className="px-6 py-4 bg-amber-700 text-white font-semibold rounded-full hover:bg-amber-800 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </button>
                    <button
                      onClick={handleShare}
                      className="px-6 py-4 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-amber-700">✓</p>
                      <p className="text-xs text-gray-600">BIS Certified</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-amber-700">✓</p>
                      <p className="text-xs text-gray-600">Free Delivery</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-amber-700">✓</p>
                      <p className="text-xs text-gray-600">100% Exchange</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
