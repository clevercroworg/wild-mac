import { MongoClient } from 'mongodb';

const options = {
  maxPoolSize: 20,
  minPoolSize: 2,
  maxIdleTimeMS: 60000,
  connectTimeoutMS: 8000,
  socketTimeoutMS: 15000,
  serverSelectionTimeoutMS: 8000,
};

/**
 * Returns the cached MongoDB database instance.
 * Automatically handles reconnection and singleton caching in both serverless (Vercel) and local environments.
 */
export async function getMongoDb(dbName = process.env.MONGODB_DB || 'wildmac_db') {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MongoDB URI not configured in environment.');
    return null;
  }

  try {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }

    const clientInstance = await global._mongoClientPromise;
    return clientInstance.db(dbName);
  } catch (err) {
    console.error('MongoDB connection error, resetting connection pool:', err.message);
    global._mongoClientPromise = null; // reset so next call retries freshly
    return null;
  }
}

export default getMongoDb;
