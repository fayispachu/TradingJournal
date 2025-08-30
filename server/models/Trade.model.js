import mongoose from "mongoose";
const TradeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  entryPrice: {
    type: Number,
    required: true,
  },
  exitPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  profitLoss: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

const Trade = mongoose.model("Trade", TradeSchema);

export default Trade;
