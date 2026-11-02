
require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const connectDB = require('./config/db');
const User = require('./model/User');
const Product = require('./model/product');

const users = [
    {
        name: 'Aarav Sharma',
        email: 'aarav@example.com',
        password: 'ShopNest123!',
        role: 'user'
    },
    {
        name: 'Meera Kapoor',
        email: 'meera@example.com',
        password: 'ShopNest123!',
        role: 'user'
    },
    {
        name: 'Rohan Verma',
        email: 'rohan@example.com',
        password: 'ShopNest123!',
        role: 'user'
    },
    {
        name: 'ShopNest Admin',
        email: 'admin@shopnest.example',
        password: 'AdminShopNest123!',
        role: 'admin'
    }
];

const products = [
    {
        name: 'Wireless Headphones',
        description: 'Bluetooth headphones with excellent sound quality.',
        price: 2499,
        category: 'Electronics',
        stock: 35,
        imageUrl: 'https://placehold.co/600x400?text=Headphones',
        rating: 4.5,
        numReviews: 24
    },
    {
        name: 'Smart Watch',
        description: 'Smart watch with fitness tracking and notifications.',
        price: 3299,
        category: 'Electronics',
        stock: 20,
        imageUrl: 'https://placehold.co/600x400?text=Smart+Watch',
        rating: 4.2,
        numReviews: 18
    },
    {
        name: 'Bluetooth Speaker',
        description: 'Portable wireless speaker with clear audio.',
        price: 1799,
        category: 'Electronics',
        stock: 28,
        imageUrl: 'https://placehold.co/600x400?text=Speaker',
        rating: 4.3,
        numReviews: 16
    },
    {
        name: 'Mechanical Keyboard',
        description: 'Mechanical keyboard suitable for work and gaming.',
        price: 2899,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://placehold.co/600x400?text=Keyboard',
        rating: 4.6,
        numReviews: 31
    },
    {
        name: 'Everyday Backpack',
        description: 'Backpack with a padded laptop compartment.',
        price: 1499,
        category: 'Accessories',
        stock: 40,
        imageUrl: 'https://placehold.co/600x400?text=Backpack',
        rating: 4.1,
        numReviews: 12
    },
    {
        name: 'Steel Water Bottle',
        description: 'Reusable insulated stainless steel water bottle.',
        price: 699,
        category: 'Home',
        stock: 60,
        imageUrl: 'https://placehold.co/600x400?text=Water+Bottle',
        rating: 4.4,
        numReviews: 27
    },
    {
        name: 'LED Desk Lamp',
        description: 'LED desk lamp for reading and studying.',
        price: 999,
        category: 'Home',
        stock: 22,
        imageUrl: 'https://placehold.co/600x400?text=Desk+Lamp',
        rating: 4.0,
        numReviews: 9
    },
    {
        name: 'Yoga Mat',
        description: 'Non-slip mat for yoga and stretching.',
        price: 1199,
        category: 'Fitness',
        stock: 25,
        imageUrl: 'https://placehold.co/600x400?text=Yoga+Mat',
        rating: 4.5,
        numReviews: 21
    },
    {
        name: 'Running Shoes',
        description: 'Lightweight running shoes with cushioned support.',
        price: 2799,
        category: 'Fashion',
        stock: 18,
        imageUrl: 'https://placehold.co/600x400?text=Running+Shoes',
        rating: 4.2,
        numReviews: 14
    },
    {
        name: 'Ceramic Coffee Mug',
        description: 'Ceramic mug for coffee and tea.',
        price: 399,
        category: 'Home',
        stock: 50,
        imageUrl: 'https://placehold.co/600x400?text=Coffee+Mug',
        rating: 4.3,
        numReviews: 11
    }
];

const seedDatabase = async () => {
    try {
        console.log('Starting seed script...');

        // Connect to MongoDB Atlas
        await connectDB();

        // Hash passwords before storing users
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            await User.updateOne(
                { email: user.email },
                {
                    $set: {
                        ...user,
                        password: hashedPassword
                    }
                },
                { upsert: true, runValidators: true }
            );
        }

        console.log('4 users seeded successfully.');

        // Insert or update products without duplicating them
        for (const product of products) {
            await Product.updateOne(
                { name: product.name },
                { $set: product },
                { upsert: true, runValidators: true }
            );
        }

        console.log('10 products seeded successfully.');
        console.log('Seed completed successfully!');

    } catch (error) {
        console.error('Seeding failed:', error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect().catch(() => {});
    }
};

seedDatabase();
