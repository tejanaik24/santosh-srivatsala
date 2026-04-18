import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Filter, Search } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const categories = [
    { value: 'all', label: 'All Jewelry' },
    { value: 'necklaces', label: 'Gold Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'bangles', label: 'Bangles' },
    { value: 'vaddanam', label: 'Vaddanam' },
    { value: 'mangalsutra', label: 'Mangalsutra' },
    { value: 'rings', label: 'Rings' },
  ];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = selectedCategory === 'all' 
        ? `${BACKEND_URL}/api/products`
        : `${BACKEND_URL}/api/products/category/${selectedCategory}`;
      const response = await axios.get(url);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-32 md:mt-36">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-orange-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-lg text-amber-100">Discover exquisite Andhra traditional gold jewelry</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Category Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-amber-700" />
              <h2 className="text-xl font-bold text-gray-900">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-amber-700">{products.length}</span> products
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/product/${product._id}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.isFeatured && (
                        <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-amber-700 font-medium mb-2 capitalize">{product.category}</p>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xl font-bold text-amber-700">₹{product.price.toLocaleString()}</p>
                        <span className="text-sm text-gray-600">{product.weight}g</span>
                      </div>
                      <p className="text-sm text-gray-500">{product.purity} Gold</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
