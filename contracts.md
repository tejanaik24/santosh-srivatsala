# Santosh Jewellers - Full-Stack Implementation

## Overview
A professional Tanishq-inspired jewelry e-commerce website for Santosh Jewellers, featuring traditional Andhra gold jewelry designs with complete backend integration.

## API Contracts

### Base URL
- Backend: `${REACT_APP_BACKEND_URL}/api`

### Endpoints Implemented

#### 1. Products
- **GET /api/products** - Get all products (with optional category filter)
  - Query params: `category` (optional), `limit` (default: 50)
  - Response: Array of product objects

- **GET /api/products/featured** - Get featured products
  - Response: Array of featured product objects (max 12)

- **GET /api/products/{product_id}** - Get single product by ID
  - Response: Single product object

- **GET /api/products/category/{category}** - Get products by category
  - Response: Array of product objects in specified category

#### 2. Store Information
- **GET /api/store** - Get store information
  - Response: Store details (address, phone, email, location, timings)

### Data Models

#### Product
```json
{
  "_id": "string",
  "name": "string",
  "category": "string",
  "price": number,
  "weight": number,
  "purity": "string",
  "description": "string",
  "images": ["string"],
  "isFeatured": boolean,
  "inStock": boolean,
  "createdAt": "datetime"
}
```

#### Store Info
```json
{
  "name": "string",
  "address": "string",
  "city": "string",
  "state": "string",
  "pincode": "string",
  "phone": "string",
  "email": "string",
  "latitude": number,
  "longitude": number,
  "timings": "string"
}
```

## Frontend-Backend Integration

### Pages Implemented
1. **Home** (`/`)
   - Hero slider with jewelry images
   - Akshaya Tritiya offers section
   - Founder section (Santosh - 15 years experience)
   - Categories grid
   - Featured products (fetches from `/api/products/featured`)
   - Customize section (WhatsApp integration)
   - Why choose us section
   - Testimonials

2. **Shop** (`/shop`, `/shop/:category`)
   - Product listing with category filter
   - Fetches from `/api/products` or `/api/products/category/:category`
   - Filterable by category (necklaces, earrings, bangles, vaddanam, mangalsutra, rings)

3. **Product Details** (`/product/:id`)
   - Fetches from `/api/products/:id`
   - Image gallery
   - Product details (price, weight, purity, category)
   - WhatsApp inquiry button
   - Call & Share buttons

4. **Store Location** (`/store-location`)
   - Fetches from `/api/store`
   - Store information
   - Google Maps integration
   - WhatsApp & phone contact
   - Store features list

## WhatsApp Integration
All WhatsApp buttons open: `https://wa.me/919876543210?text={custom_message}`

### Use Cases:
1. **General Inquiry** - Floating button
2. **Product Inquiry** - From product details page with product info
3. **Customize Jewelry** - Send photo for customization
4. **Book Appointment** - Schedule store visit
5. **Get Directions** - From store location page

## Features Implemented

### ✅ Completed
- Multi-page responsive website (Tanishq-inspired design)
- Hero slider with 4 slides
- Founder section with Santosh's photo and 15-year legacy
- Akshaya Tritiya special offers section
- Product catalog with categories
- Featured products section
- Full product details page
- Store location with Google Maps
- WhatsApp integration (inquiry, customize, booking)
- Mobile responsive design
- Real jewelry images from Unsplash
- MongoDB database with 12 seeded products
- Category filtering
- Free home delivery banner (Vizag)

### ❌ Not Implemented (As Requested)
- No payment gateway
- No user authentication/login
- No shopping cart
- No search with image upload (placeholder UI ready)

## Database
- **Collection: products** - 12 Andhra traditional jewelry products seeded
- **Collection: store_info** - Store details
- Categories: necklaces, earrings, bangles, vaddanam, mangalsutra, rings

## Environment Variables
- `REACT_APP_BACKEND_URL` - Backend API URL
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name

## Design Highlights
- Tanishq-inspired premium design
- Gold/amber/orange color scheme
- Professional founder section
- Festive Akshaya Tritiya theme
- Real professional jewelry photos (NO AI-generated images)
- Smooth animations and transitions
- WhatsApp floating button
- Mobile responsive across all pages
