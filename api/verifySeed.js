// verifySeed.js
const mongoose = require('mongoose');

// Paste the exact same URI you used in forceSeed.js
const EXACT_MONGO_URI = "mongodb+srv://lukmanadeadeoti_db_user:kQ8T1jEtPpPrwZsG@adeotillc.tfd6rtw.mongodb.net/?appName=adeotillc";

async function verify() {
  try {
    await mongoose.connect(EXACT_MONGO_URI);
    
    // Fetch all collections in this database
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📦 Found Collections inside "adeoti_prod":', collections.map(c => c.name));
    
    // Fetch the admin count
    const count = await mongoose.connection.db.collection('adminusers').countDocuments();
    console.log(`🔑 Number of Admin records found: ${count}`);

  } catch (err) {
    console.error('❌ Error reading database:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

verify();