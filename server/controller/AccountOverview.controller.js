import AccountOverview from "../models/AccountOverview.model";

export const getAccountOverview = async (req, res) => {
  try {
    const userId = req.user.id;
    const accountOverview = await AccountOverview.findOne({ userId });
    res.json(accountOverview);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const createAccountOverview = async (req, res) => {
  try {
    const userId = req.user.id;
    const accountOverview = new AccountOverview({ userId });
    await accountOverview.save();
    res.status(201).json(accountOverview);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
