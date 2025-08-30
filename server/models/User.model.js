import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    trades: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trade",
      },
    ],
    accountOverview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AccountOverview",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
