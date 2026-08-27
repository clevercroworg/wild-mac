import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  maxPoolSize: 20,
  minPoolSize: 5,
  maxIdleTimeMS: 60000,
  connectTimeoutMS: 5000,
  socketTimeoutMS: 10000,
  serverSelectionTimeoutMS: 4000,
};

let client;
let clientPromise;

if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so the MongoClient is not constantly re-created
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, maintain persistent singleton client
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  }
} else {
  clientPromise = null;
}

export default clientPromise;

/**
 * Returns the cached MongoDB database instance.
 */
export async function getMongoDb(dbName = process.env.MONGODB_DB || 'wildmac_db') {
  if (!clientPromise) return null;
  try {
    const clientInstance = await clientPromise;
    return clientInstance.db(dbName);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return null;
  }
}
