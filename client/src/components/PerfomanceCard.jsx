import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCircle({ target }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="w-[50%]">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#06b6d4",
          trailColor: "#3f3f46",
        })}
      />
    </div>
  );
}

function PerformanceCard() {
  return (
    <div className="flex w-[95%] gap-5 items-center justify-center bg-neutral-950 h-[20vh]">
      <div className="w-[30%] h-[90%] text-gray-400 flex flex-col gap-2 bg-neutral-900 items-center justify-center">
        <ProgressCircle target={85} />
        <h1>Win Rate</h1>
      </div>

      <div className="w-[30%] h-[90%] text-gray-400 flex flex-col gap-2 bg-neutral-900 items-center justify-center">
        <ProgressCircle target={90} />
        <h1>Accuracy</h1>
      </div>

      <div className="w-[30%] h-[90%] text-gray-400 flex flex-col gap-2 bg-neutral-900 items-center justify-center">
        <ProgressCircle target={22} />
        <h1>Mistake Ratio</h1>
      </div>
    </div>
  );
}

export default PerformanceCard;
