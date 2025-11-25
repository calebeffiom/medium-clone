import mongoose from "mongoose";

export async function connectToMongo() {
    const MONGODB_URI = process.env.MONGODB_URI as string;

    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable");
    }

    const cached = (global as any).mongoose || {conn: null, promise: null};

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI as any);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}