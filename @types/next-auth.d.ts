// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      // Add your custom property, which is the MongoDB ObjectID as a string
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    // The user object from the adapter will have the stringified ID
    id: string;
  }
}