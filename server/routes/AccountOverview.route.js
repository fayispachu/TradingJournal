import express from "express";

const AccountOverviewRouter = express.Router();

AccountOverviewRouter.get("/", (req, res) => {
  res.send("Account Overview");
});

export default AccountOverviewRouter;
