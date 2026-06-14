// forceSeed.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 1. PASTE YOUR EXACT ATLAS CONNECTION STRING HERE
// Explicitly add '/adeoti_prod' before the '?' to force a clean database name
const EXACT_MONGO_URI = "mongodb+srv://lukmanadeadeoti_db_user:kQ8T1jEtPpPrwZsG@adeotillc.tfd6rtw.mongodb.net/?appName=adeotillc";

const AdminUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }
}, { timestamps: true });

const AdminUser = mongoose.model('AdminUser', AdminUserSchema);

async function run() {
  try {
    console.log('🔄 Attempting direct connection to Atlas...');
    await mongoose.connect(EXACT_MONGO_URI);
    console.log('✅ Connected directly to Atlas cluster.');

    // Clear out any old instances if they exist
    await AdminUser.deleteMany({});

    console.log('🔑 Hashing password...');
    const hashedPassword = await bcrypt.hash('SuperSecurePassword2026!', 10);

    const admin = new AdminUser({
      email: 'admin@adeoti.com',
      password: hashedPassword
    });

    await admin.save();
    console.log('🚀 SUCCESS! User written to the "adeoti_prod" database.');

  } catch (err) {
    console.error('❌ Connection or insertion error:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();