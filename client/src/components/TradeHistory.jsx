import React, { useState } from "react";

const dummyTrades = [
  {
    status: "win",
    date: "2025-07-14",
    pair: "BTC/USDT",
    type: "Buy",
    lot: 20,
    pnl: 62800.5,
  },
  {
    status: "loss",
    date: "2025-07-11",
    pair: "BNB/USDT",
    type: "Sell",
    lot: 15,
    pnl: -520.35,
  },
  {
    status: "win",
    date: "2025-07-12",
    pair: "SOL/USDT",
    type: "Buy",
    lot: 25,
    pnl: 189.44,
  },
  {
    status: "loss",
    date: "2025-07-13",
    pair: "ETH/USDT",
    type: "Sell",
    lot: 30,
    pnl: -3421.75,
  },
  {
    status: "win",
    date: "2025-07-14",
    pair: "XRP/USDT",
    type: "Buy",
    lot: 50,
    pnl: 1.254,
  },
  {
    status: "loss",
    date: "2025-07-10",
    pair: "ADA/USDT",
    type: "Sell",
    lot: 40,
    pnl: -0.312,
  },
  {
    status: "win",
    date: "2025-07-09",
    pair: "DOGE/USDT",
    type: "Buy",
    lot: 60,
    pnl: 120.88,
  },
  {
    status: "loss",
    date: "2025-07-13",
    pair: "BNB/USDT",
    type: "Sell",
    lot: 30,
    pnl: -540.22,
  },
  {
    status: "win",
    date: "2025-07-12",
    pair: "MATIC/USDT",
    type: "Buy",
    lot: 45,
    pnl: 0.854,
  },
  {
    status: "loss",
    date: "2025-07-08",
    pair: "LTC/USDT",
    type: "Sell",
    lot: 20,
    pnl: -98.65,
  },
  {
    status: "win",
    date: "2025-07-14",
    pair: "ETH/USDT",
    type: "Buy",
    lot: 25,
    pnl: 3500.0,
  },
  {
    status: "loss",
    date: "2025-07-11",
    pair: "SOL/USDT",
    type: "Sell",
    lot: 18,
    pnl: -112.78,
  },
  {
    status: "win",
    date: "2025-07-10",
    pair: "XRP/USDT",
    type: "Buy",
    lot: 70,
    pnl: 0.932,
  },
  {
    status: "loss",
    date: "2025-07-09",
    pair: "BTC/USDT",
    type: "Sell",
    lot: 10,
    pnl: -15200.45,
  },
  {
    status: "win",
    date: "2025-07-13",
    pair: "BNB/USDT",
    type: "Buy",
    lot: 22,
    pnl: 589.67,
  },
];

function TradeHistory() {
  const [selectedRange, setSelectedRange] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const tradesPerPage = 10; // how many rows to show
  const totalPages = Math.ceil(dummyTrades.length / tradesPerPage);

  // slice trades for current page
  const indexOfLastTrade = currentPage * tradesPerPage;
  const indexOfFirstTrade = indexOfLastTrade - tradesPerPage;
  const currentTrades = dummyTrades.slice(indexOfFirstTrade, indexOfLastTrade);

  return (
    <div
      id="trades"
      className="w-full py-5 h-[100vh] bg-neutral-950 p-1 flex flex-col"
    >
      {/* Header */}
      <div className="flex flex-row justify-between mx-5 mb-2">
        <h2 className="text-xl font-semibold text-gray-200">Trade History</h2>
        <div className="h-9">
          <select
            onChange={(e) => setSelectedRange(e.target.value)}
            value={selectedRange}
            className="bg-neutral-900 border border-neutral-700 text-gray-300 px-3 py-1 h-9 rounded text-sm"
          >
            <option value="all">All Time</option>
            <option value="1d">Today</option>
            <option value="1m">M</option>
            <option value="3m">3M</option>
            <option value="6m">6M</option>
            <option value="1y">1Y</option>
          </select>
        </div>
      </div>

      {/* Table with scroll */}
      <div className="overflow-y-auto border border-neutral-800 rounded flex-1">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="text-gray-400 bg-neutral-900 border-b border-neutral-800 sticky top-0">
            <tr>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Pair</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">P&L</th>
            </tr>
          </thead>
          <tbody>
            {currentTrades.map((trade, index) => (
              <tr
                key={index}
                className="hover:bg-neutral-800 transition border-b border-neutral-800"
              >
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded border font-semibold ${
                      trade.status === "win"
                        ? "text-green-400 border-green-400"
                        : "text-red-400 border-red-400"
                    }`}
                  >
                    {trade.status}
                  </span>
                </td>
                <td className="px-4 py-3">{trade.date}</td>
                <td className="px-4 py-3">{trade.pair}</td>
                <td
                  className={`px-4 py-3 ${
                    trade.type === "Buy" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {trade.type}
                </td>
                <td className="px-4 py-3">{trade.lot}</td>
                <td className="px-4 py-3">${trade.pnl.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-3 px-5">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-neutral-800 text-gray-300 disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-gray-400 text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-neutral-800 text-gray-300 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TradeHistory;
