import { Schema, model, models } from "mongoose";

const CommentsSchema = new Schema(
    {
        postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        text: String,
      },
      { timestamps: true }
    
)
export default models.Comments || model("Comments", CommentsSchema)