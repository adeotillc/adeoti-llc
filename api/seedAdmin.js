const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const AdminUser = require('./models/AdminUser'); // Ensure this path matches your structure

// Load environmental configurations
dotenv.config();

const seedAdmin = async () => {
  // Replace these with your target deployment credentials
  const adminEmail = 'admin@adeoti.com';
  const rawPassword = '@SuperSecurePassword2026!'; 

  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('❌ Error: MONGO_URI is missing from your .env file.');
    process.exit(1);
  }

  try {
    console.log('🔄 Connecting to MongoDB Cluster...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected successfully.');

    // Check if an admin account already exists to prevent duplicate seeding duplicates
    const existingAdmin = await AdminUser.findOne({ email: adminEmail.toLowerCase() });
    if (existingAdmin) {
      console.log(`⚠️ An admin account with the email "${adminEmail}" already exists. Seeding skipped.`);
      process.exit(0);
    }

    console.log('🔑 Hashing password with bcryptjs...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);

    const newAdmin = new AdminUser({
      email: adminEmail,
      password: hashedPassword
    });

    await newAdmin.save();
    console.log(`🚀 Production Success: Admin account "${adminEmail}" seeded successfully!`);
    
  } catch (error) {
    console.error('❌ Database seeding failed:', error.message);
  } finally {
    // Gracefully terminate connection loop
    await mongoose.disconnect();
    process.exit(0);
  }
};

seedAdmin();