import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
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
    // In production mode, it's best to not use a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  clientPromise = null;
}

export default clientPromise;

export async function getMongoDb(dbName = 'wildmac_db') {
  if (!clientPromise) return null;
  try {
    const client = await clientPromise;
    return client.db(dbName);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    return null;
  }
}
