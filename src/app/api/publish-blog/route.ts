import { NextResponse, NextRequest } from "next/server";
import { connectToMongo } from "@/lib/mongoDB";
import Blog from "@/models/blog-model"
import mongoose from "mongoose";
import cloudinary from "@/lib/cloudinaryConfig";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { generateSlug } from "@/utils/helpers";
// import { Collection } from "mongodb";
export async function POST(req: NextRequest) {
  const res = NextResponse;
  try {
    const reqBody = await req.json()
    const { title, subtitle, paragraphs, coverImage, tags } = reqBody
    const session = await getServerSession(authOptions)

    // check if the user is logged In
    if (!session || !session.user) {
      return res.json(
        { message: "Unauthorized: You must be logged in to post." },
        { status: 401 }
      )
    }
    // Check if all the fields have been added
    if (!title || !subtitle || !paragraphs || !coverImage || !tags) {
      return res.json(
        { message: "bad request" },
        { status: 400 }
      )
    }

    // connect to mongo DB
    await connectToMongo()

    // upload to cloudinary
    const uploadedImage = await cloudinary.uploader.upload(coverImage,
      {
        folder: "blog-images",
      }
    )





    const slug = generateSlug(title)




    const post = {
      author: session.user.id,
      title: title,
      subtitle: subtitle,
      content: paragraphs,
      coverImage: uploadedImage.secure_url,
      slug: slug,
      tags: tags,
      published: true,
    }
    const result = await Blog.create(post)



    return res.json(
      { message: "blog posted" },
      { status: 201 },

    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return res.json(
      { error: "Server error" },
      { status: 500 }
    );
  }

}


export async function GET() {
  return NextResponse.json({ ok: true, time: new Date().toISOString() });
}
