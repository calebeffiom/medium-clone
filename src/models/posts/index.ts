import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
    
    {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        coverImage: String,
        tags: [String],
        published: { type: Boolean, default: false },
      },
      { timestamps: true }
)
export default models.posts || mongoose.model("posts", PostSchema);