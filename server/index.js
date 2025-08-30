import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db/dataBase.js";

import UserRouter from "./routes/User.route.js";
import TradeRouter from "./routes/Trade.route.js";
import AccountOverviewRouter from "./routes/AccountOverview.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tradingjournal-app-fayizpachu.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

connectDB();

app.use("/api/user", UserRouter);
app.use("/api/trade", TradeRouter);
app.use("/api/account-overview", AccountOverviewRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
