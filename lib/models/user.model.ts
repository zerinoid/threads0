import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, requeired: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comunity",
    },
  ],
});

// First time call won't have 'models.User' so the function will be called,
// creating one use the 'userSchema'. Second time call will finde 'User' prop.
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
