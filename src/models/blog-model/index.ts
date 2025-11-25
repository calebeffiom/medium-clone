import mongoose, {Schema, Document} from "mongoose";

const BlogSchema = new Schema(
  {
    authorId: {type: String, required: true},
    title: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: String,
    tags: [String],
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);