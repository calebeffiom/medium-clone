import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable");
}

// Use global to avoid multiple connections during hot reload
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log("✅ Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = (async () => {
      try {
        // --- CRUCIAL FIX HERE: Explicitly set Mongoose's Promise ---
        (mongoose as any).Promise = global.Promise; 
        
        const conn = await mongoose.connect(MONGODB_URI, {
          dbName: "blog_app",
        });
        console.log("✅ New MongoDB connection established");
        return conn;
      } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        // Throwing the error ensures cached.conn remains null if connection fails
        throw error;
      }
    })();
  }

  // Wait for the promise to resolve and cache the connection object
  cached.conn = await cached.promise;
  (global as any).mongoose = cached;

  return cached.conn;
}