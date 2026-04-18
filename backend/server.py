from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Models
class Product(BaseModel):
    name: str
    category: str
    price: float
    weight: float
    purity: str
    description: str
    images: List[str]
    isFeatured: bool = False
    inStock: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)

class ProductResponse(Product):
    id: str = Field(alias="_id")

    class Config:
        populate_by_name = True

class StoreInfo(BaseModel):
    name: str
    address: str
    city: str
    state: str
    pincode: str
    phone: str
    email: str
    latitude: float
    longitude: float
    timings: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Santosh Jewellers API", "status": "active"}

# Products endpoints
@api_router.get("/products", response_model=List[dict])
async def get_all_products(category: Optional[str] = None, limit: int = 50):
    try:
        query = {}
        if category:
            query['category'] = category
        
        products = await db.products.find(query).limit(limit).to_list(limit)
        for product in products:
            product['_id'] = str(product['_id'])
        return products
    except Exception as e:
        logging.error(f"Error fetching products: {e}")
        raise HTTPException(status_code=500, detail="Error fetching products")

@api_router.get("/products/featured", response_model=List[dict])
async def get_featured_products():
    try:
        products = await db.products.find({"isFeatured": True}).limit(12).to_list(12)
        for product in products:
            product['_id'] = str(product['_id'])
        return products
    except Exception as e:
        logging.error(f"Error fetching featured products: {e}")
        raise HTTPException(status_code=500, detail="Error fetching featured products")

@api_router.get("/products/{product_id}", response_model=dict)
async def get_product_by_id(product_id: str):
    try:
        from bson import ObjectId
        product = await db.products.find_one({"_id": ObjectId(product_id)})
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")
        product['_id'] = str(product['_id'])
        return product
    except Exception as e:
        logging.error(f"Error fetching product: {e}")
        raise HTTPException(status_code=500, detail="Error fetching product")

@api_router.get("/products/category/{category}", response_model=List[dict])
async def get_products_by_category(category: str, limit: int = 50):
    try:
        products = await db.products.find({"category": category}).limit(limit).to_list(limit)
        for product in products:
            product['_id'] = str(product['_id'])
        return products
    except Exception as e:
        logging.error(f"Error fetching products by category: {e}")
        raise HTTPException(status_code=500, detail="Error fetching products")

# Store info endpoint
@api_router.get("/store", response_model=dict)
async def get_store_info():
    try:
        store = await db.store_info.find_one()
        if store:
            store['_id'] = str(store['_id'])
            return store
        else:
            # Return default store info
            return {
                "name": "Srivatsala Jewellers - Silver House",
                "address": "MG Road, Visakhapatnam",
                "city": "Visakhapatnam",
                "state": "Andhra Pradesh",
                "pincode": "530002",
                "phone": "+91 98765 43210",
                "email": "contact@srivatsalajewellers.com",
                "latitude": 17.6868,
                "longitude": 83.2185,
                "timings": "Mon-Sat: 10:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM"
            }
    except Exception as e:
        logging.error(f"Error fetching store info: {e}")
        raise HTTPException(status_code=500, detail="Error fetching store info")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
