// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongoClientSetup";

// Define your configuration object with the NextAuthOptions type
export const authOptions: NextAuthOptions = {
  // 1. Configure the Adapter
  adapter: MongoDBAdapter(clientPromise),

  // 2. Configure the Google Provider
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string, // Cast to string to satisfy types
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],

  // 3. Customize Callbacks to get the MongoDB User ID
  callbacks: {
    async session({ session, user }) {
      // TypeScript knows 'user' exists and has an 'id' property when using an adapter.
      if (session.user?.id){
        if (user){
          session.user.id = user.id
        }
      };
      return session;
    },
  },

  // Optional: Set a secret
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(authOptions);