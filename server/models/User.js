import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    password: { type: String, required: true },
    roll: {
      type: String,
      enum: ["Creator", "Brand", "Agency", "admin"],
      default: "Creator",
    },
    handle: { type: String, required: true, unique: true },
    links: [
      {
        url: { type: String },
        title: { type: String },
        icon: { type: String },
      },
    ],
    socialMedia: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
  },
  {
    collection: "user-data-linktree",
  },

  { timestamps: true }
);
const User = model("User", UserSchema);
export default User;
