import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1-2", performance: 10 },
  { name: "2-3", performance: 25 },
  { name: "3-4", performance: 40 },

  { name: "20-21", performance: 200 },

  { name: "23-24", performance: 215 },
];

function AccountPerformance() {
  return (
    <div className="w-[100%] lg:w-[90%] h-[30vh] lg:h-[50vh]   flex justify-center lg:items-start">
      <div className="bg-neutral-900 w-[95%] h-full p-5  rounded-lg shadow-md">
        <h1 className="text-gray-400 text-lg font-bold mb-4">
          Account Performance
        </h1>
        <ResponsiveContainer width="100%" md:height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" tick={false} axisLine={false} />

            <Tooltip />
            <Line
              type="linear"
              dataKey="performance"
              stroke="#06b6d4"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AccountPerformance;
