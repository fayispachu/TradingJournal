const addTrade = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      symbol,
      entryPrice,
      exitPrice,
      quantity,
      profitLoss,
      image,
      notes,
    } = req.body;
    const trade = new Trade({
      userId,
      symbol,
      entryPrice,
      exitPrice,
      quantity,
      profitLoss,
      image,
      notes,
    });
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const getTradeHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const tradeHistory = await Trade.find({ userId });
    res.json(tradeHistory);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
