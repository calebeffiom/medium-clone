import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongoDB";
import posts from "@/models/posts";
import mongoose from "mongoose";
// import { Collection } from "mongodb";
export async function POST(req: NextRequest){
    const res = NextResponse;
    const reqBody = req.body;

    console.log(reqBody)
    try {
      await connectDB()
      const authorId = "675abc8940e0c92ad4b1d11b"
        const payload = {
            author: new mongoose.Types.ObjectId(authorId), // replace with logged-in user
            title: "My first blog",
            content: "<p>Hello world</p>",
            coverImage: "https://example.com/image.jpg",
            tags: ["nextjs", "mongodb"],
            published: true,
          }

          const result = await posts.create(payload)
          console.log("added to posts")
          return res.json(
            { success: true, title: result.title},
            { status: 201 }
          );

    } catch (error) {
        console.error("Error creating blog:", error);
        return res.json(
          { error: "Server error" },
          { status: 500 }
        );
    }

    
}


// app/api/ping/route.ts
// import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, time: new Date().toISOString() });
}
