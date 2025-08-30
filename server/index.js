import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/dataBase.js";
import UserRouter from "./routes/User.route.js";
import TradeRouter from "./routes/Trade.route.js";
import AccountOverviewRouter from "./routes/AccountOverview.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
connectDB();

app.use("/api/user", UserRouter);
app.use("/api/trade", TradeRouter);
app.use("/api/account-overview", AccountOverviewRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
