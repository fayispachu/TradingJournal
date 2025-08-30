import mongoose from "mongoose";


const AccountOverviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalBalance: {
    type: Number,
    default: 0,
  },
  totalTrades: {
    type: Number,
    default: 0,
  },
  profitableTrades: {
    type: Number,
    default: 0,
  },
  losingTrades: {
    type: Number,
    default: 0,
  },
  winRate: {
    type: Number,
    default: 0,
  },
  // Add more fields as needed
});

const AccountOverview = mongoose.model("AccountOverview", AccountOverviewSchema);

export default AccountOverview;
