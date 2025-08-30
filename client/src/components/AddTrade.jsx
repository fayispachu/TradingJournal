import React, { useContext, useState } from "react";
import { OtherStates } from "../context/CreateContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function AddTrade() {
  const { isAddTradeOpen, closeAddTrade } = useContext(OtherStates);
  const [formData, setFormData] = useState({
    instrument: "",
    datetime: "",
    side: "Buy",
    entryPrice: "",
    exitPrice: "",
    lot: "",
    fees: "",
    grossProfit: "",
    netProfit: "",
    strategy: "",
    mistake: "",
    notes: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const updatedValue = type === "file" ? files[0] : value;

    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: updatedValue };

      // Auto-calc profits
      const entry =
        parseFloat(name === "entryPrice" ? value : updatedForm.entryPrice) || 0;
      const exit =
        parseFloat(name === "exitPrice" ? value : updatedForm.exitPrice) || 0;
      const lot = parseFloat(name === "lot" ? value : updatedForm.lot) || 0;
      const fees = parseFloat(name === "fees" ? value : updatedForm.fees) || 0;

      const gross = (exit - entry) * lot;
      const net = gross - fees;

      updatedForm.grossProfit = gross.toFixed(2);
      updatedForm.netProfit = net.toFixed(2);

      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trade submitted:", formData);
    closeAddTrade(); // auto close
  };

  return (
    <AnimatePresence>
      {isAddTradeOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAddTrade}
          />

          <motion.div
            className="fixed inset-0 flex justify-center z-50"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className=" w-[97%]  p-6 bg-neutral-900 rounded-2xl shadow-lg text-white overflow-y-auto max-h-[80vh]">
              <div className="flex justify-between items-center">
                {" "}
                <h2
                  onClick={closeAddTrade}
                  className="text-xl font-semibold mb-6 cursor-pointer"
                >
                  Add New Trade
                </h2>
                <button
                  onClick={closeAddTrade}
                  className=" text-gray-400 hover:text-white "
                >
                  <X size={28} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">
                      Instrument Symbol
                    </label>
                    <input
                      type="text"
                      name="instrument"
                      value={formData.instrument}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                      placeholder="e.g. BTC/USDT"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input
                      type="date"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Trade Side</label>
                    <select
                      name="side"
                      value={formData.side}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                    >
                      <option value="Buy">Buy</option>
                      <option value="Sell">Sell</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Lot Size</label>
                    <input
                      type="number"
                      name="lot"
                      value={formData.lot}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                      step="0.0001"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Entry Price</label>
                    <input
                      type="number"
                      name="entryPrice"
                      value={formData.entryPrice}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Exit Price</label>
                    <input
                      type="number"
                      name="exitPrice"
                      value={formData.exitPrice}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Fees</label>
                    <input
                      type="number"
                      name="fees"
                      value={formData.fees}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Profit summary */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-neutral-800 border border-neutral-700 p-4 rounded">
                    <label className="block text-sm text-gray-400 mb-1">
                      Gross Profit
                    </label>
                    <div className="text-lg font-semibold text-green-400">
                      {formData.grossProfit || "0.00"}
                    </div>
                  </div>
                  <div className="flex-1 bg-neutral-800 border border-neutral-700 p-4 rounded">
                    <label className="block text-sm text-gray-400 mb-1">
                      Net Profit
                    </label>
                    <div className="text-lg font-semibold text-yellow-400">
                      {formData.netProfit || "0.00"}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Strategy</label>
                  <input
                    type="text"
                    name="strategy"
                    value={formData.strategy}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                    placeholder="e.g. Breakout, Scalping"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Mistake</label>
                  <input
                    type="text"
                    name="mistake"
                    value={formData.mistake}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                    placeholder="e.g. Entered early"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded"
                    rows="4"
                    placeholder="Add any trade notes here..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Upload Screenshot
                  </label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange}
                    className="text-sm text-gray-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg font-semibold"
                >
                  Save Trade
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default AddTrade;
