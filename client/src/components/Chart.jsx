// components/Chart.jsx
import React from "react";
import { X } from "lucide-react";

function Chart({ symbol, onClose }) {
  if (!symbol) return null;

  return (
    <div className="mt-6 h-screen" data-testid="chart-container">
      <div className="flex justify-between items-center mb-2">
        <h3
          className="text-lg font-medium text-gray-200"
          data-testid="chart-title"
        >
          {symbol} Chart
        </h3>
        <button
          onClick={onClose}
          data-testid="close-button"
          className="text-gray-400 hover:text-red-500"
        >
          <X size={30} />
        </button>
      </div>

      <iframe
        src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=D&theme=dark`}
        width="100%"
        height="600"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
        title="TradingView Chart"
        className="rounded border border-neutral-800"
        data-testid="chart-iframe"
      />
    </div>
  );
}

export default Chart;
