import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const StoreLocation = () => {
  const [storeInfo, setStoreInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStoreInfo();
  }, []);

  const fetchStoreInfo = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/store`);
      setStoreInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching store info:', error);
      setLoading(false);
    }
  };

  const handleWhatsAppDirection = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi, I need directions to your store',
      '_blank'
    );
  };

  const handleGetDirections = () => {
    if (storeInfo) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${storeInfo.latitude},${storeInfo.longitude}`,
        '_blank'
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-32 md:mt-36">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-orange-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Store</h1>
            <p className="text-lg text-amber-100">Experience luxury jewelry in person</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Store Information */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Store Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {storeInfo?.address}<br />
                        {storeInfo?.city}, {storeInfo?.state} - {storeInfo?.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${storeInfo?.phone}`}
                        className="text-gray-700 hover:text-amber-700 transition-colors"
                      >
                        {storeInfo?.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${storeInfo?.email}`}
                        className="text-gray-700 hover:text-amber-700 transition-colors"
                      >
                        {storeInfo?.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Timings</h3>
                      <p className="text-gray-700">{storeInfo?.timings}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleGetDirections}
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </button>
                <button
                  onClick={handleWhatsAppDirection}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </button>
              </div>

              {/* Features */}
              <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Store Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Free Parking Available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Air Conditioned Showroom</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Expert Consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Safe & Secure Environment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">Free Home Delivery in Vizag</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="h-[600px] lg:h-auto">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
                <iframe
                  src={`https://www.google.com/maps?q=${storeInfo?.latitude},${storeInfo?.longitude}&output=embed&z=15`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Srivatsala Jewellers Location"
                  className="w-full h-full min-h-[600px]"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="mt-12 bg-gradient-to-r from-amber-700 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Us Today!
            </h2>
            <p className="text-lg text-amber-100 mb-6 max-w-2xl mx-auto">
              Experience the finest collection of traditional Andhra gold jewelry. Our expert team is ready to help you find the perfect piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="px-8 py-4 bg-white text-amber-900 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Call: +91 98765 43210
              </a>
              <button
                onClick={handleWhatsAppDirection}
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto sm:mx-0"
              >
                <MessageCircle className="w-5 h-5" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
