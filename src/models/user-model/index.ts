import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    avatarUrl: String,
    bio: String,
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);