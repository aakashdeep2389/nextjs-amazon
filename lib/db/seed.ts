import mongoose from 'mongoose';
import { cwd } from 'process';
import { loadEnvConfig } from '@next/env';

import data from '@/lib/data';
import { connectToDatabase } from '.';
import Product from './models/product.model';

// Load env variables for standalone script execution
loadEnvConfig(cwd());

/**
 * Seed the database with sample data.
 */
const seedDatabase = async () => {
  try {
    // 🚨 Safety check
    if (process.env.NODE_ENV === 'production') {
      throw new Error('❌ Seeding is not allowed in production!');
    }

    // Connect to DB
    await connectToDatabase(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Wipe collection
    await Product.deleteMany();
    console.log('🗑️  Cleared Product collection');

    // Insert sample data
    const createdProducts = await Product.insertMany(data.products);
    console.log(`📦 Inserted ${createdProducts.length} products`);

    console.log('🎉 Database seeded successfully');
  } catch (error) {
    console.error('❌ Failed to seed database:', error);
    process.exitCode = 1;
  } finally {
    // Gracefully close DB connection
    await mongoose.disconnect();
    console.log('🔌 MongoDB connection closed');
  }
};

// Run the seeding script
seedDatabase();


// const main = async () => {
//   try {
//     const { products } = data
//     await connectToDatabase(process.env.MONGODB_URI)

//     await Product.deleteMany()
//     const createdProducts = await Product.insertMany(products)

//     console.log({
//       createdProducts,
//       message: 'Seeded database successfully',
//     })
//     process.exit(0)
//   } catch (error) {
//     console.error(error)
//     throw new Error('Failed to seed database')
//   }
// }

// main()