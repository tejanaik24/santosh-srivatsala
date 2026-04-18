import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Product data with real images
products_data = [
    # Necklaces
    {
        "name": "Traditional Andhra Gold Necklace",
        "category": "necklaces",
        "price": 125000,
        "weight": 45.5,
        "purity": "22K",
        "description": "Exquisite traditional Andhra design gold necklace with intricate temple motifs. Perfect for weddings and special occasions.",
        "images": [
            "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzc2NDk0MTE2fDA&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    {
        "name": "Lakshmi Temple Gold Necklace",
        "category": "necklaces",
        "price": 145000,
        "weight": 52.3,
        "purity": "22K",
        "description": "Divine Lakshmi temple design necklace with detailed craftsmanship. A symbol of prosperity and tradition.",
        "images": [
            "https://images.unsplash.com/photo-1600862754152-80a263dd564f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxnb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzc2NDk0MTE2fDA&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    # Earrings
    {
        "name": "Jhumka Gold Earrings",
        "category": "earrings",
        "price": 35000,
        "weight": 15.2,
        "purity": "22K",
        "description": "Classic Andhra style jhumka earrings with traditional bell design and intricate detailing.",
        "images": [
            "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    {
        "name": "Temple Design Earrings",
        "category": "earrings",
        "price": 42000,
        "weight": 18.5,
        "purity": "22K",
        "description": "Elegant temple design earrings perfect for both traditional and contemporary outfits.",
        "images": [
            "https://images.unsplash.com/flagged/photo-1570055349452-29232699cc63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    # Bangles
    {
        "name": "Traditional Gold Bangles Set",
        "category": "bangles",
        "price": 95000,
        "weight": 35.8,
        "purity": "22K",
        "description": "Set of 6 traditional Andhra gold bangles with beautiful patterns. A must-have for every occasion.",
        "images": [
            "https://images.unsplash.com/photo-1740431377901-c2f28d50c759?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    {
        "name": "Kada Style Gold Bangles",
        "category": "bangles",
        "price": 75000,
        "weight": 28.2,
        "purity": "22K",
        "description": "Modern kada style gold bangles with traditional touch. Perfect for daily wear and special occasions.",
        "images": [
            "https://images.unsplash.com/photo-1671642883395-0ab89c3ac890?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    # Vaddanam
    {
        "name": "Bridal Vaddanam Gold Belt",
        "category": "vaddanam",
        "price": 185000,
        "weight": 68.5,
        "purity": "22K",
        "description": "Exquisite bridal vaddanam with intricate temple work. A traditional Andhra bridal essential.",
        "images": [
            "https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHw0fHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    {
        "name": "Classic Vaddanam Design",
        "category": "vaddanam",
        "price": 155000,
        "weight": 55.3,
        "purity": "22K",
        "description": "Classic vaddanam design with traditional patterns. Perfect for brides and special occasions.",
        "images": [
            "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": True,
        "inStock": True
    },
    # Mangalsutra
    {
        "name": "Traditional Black Bead Mangalsutra",
        "category": "mangalsutra",
        "price": 65000,
        "weight": 22.5,
        "purity": "22K",
        "description": "Classic black bead mangalsutra with traditional gold pendant. Symbol of marital bliss.",
        "images": [
            "https://images.unsplash.com/photo-1760786933663-327c858d5434?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": False,
        "inStock": True
    },
    {
        "name": "Modern Mangalsutra Design",
        "category": "mangalsutra",
        "price": 55000,
        "weight": 18.8,
        "purity": "22K",
        "description": "Contemporary mangalsutra design with traditional essence. Perfect for modern brides.",
        "images": [
            "https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": False,
        "inStock": True
    },
    # Rings
    {
        "name": "Gold Ring with Stone",
        "category": "rings",
        "price": 25000,
        "weight": 8.5,
        "purity": "22K",
        "description": "Elegant gold ring with precious stone. Perfect for engagement and daily wear.",
        "images": [
            "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzc2NDk0MTE2fDA&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": False,
        "inStock": True
    },
    {
        "name": "Traditional Gold Ring",
        "category": "rings",
        "price": 18000,
        "weight": 6.2,
        "purity": "22K",
        "description": "Classic traditional gold ring design. Timeless elegance for every occasion.",
        "images": [
            "https://images.unsplash.com/photo-1600862754152-80a263dd564f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxnb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzc2NDk0MTE2fDA&ixlib=rb-4.1.0&q=85"
        ],
        "isFeatured": False,
        "inStock": True
    },
]

async def seed_products():
    """Seed product data"""
    try:
        # Clear existing products
        await db.products.delete_many({})
        print("Cleared existing products")
        
        # Insert new products
        result = await db.products.insert_many(products_data)
        print(f"Inserted {len(result.inserted_ids)} products successfully!")
        
        # Verify
        count = await db.products.count_documents({})
        print(f"Total products in database: {count}")
        
    except Exception as e:
        print(f"Error seeding data: {e}")

async def main():
    await seed_products()
    client.close()

if __name__ == "__main__":
    asyncio.run(main())
