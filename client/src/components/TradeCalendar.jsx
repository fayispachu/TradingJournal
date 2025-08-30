import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function TradeCalendar() {
  const events = [
    {
      title: "+$320",
      date: "2025-08-18", // Monday
      extendedProps: {
        journal: "BTC breakout scalp, strong momentum",
        type: "profit",
      },
    },
    {
      title: "-$150",
      date: "2025-08-19", // Tuesday
      extendedProps: {
        journal: "ETH fakeout at resistance, stopped early",
        type: "loss",
      },
    },
    {
      title: "+$500",
      date: "2025-08-20", // Wednesday
      extendedProps: {
        journal: "SOL long after news pump, good R:R",
        type: "profit",
      },
    },
    {
      title: "+$80",
      date: "2025-08-21", // Thursday
      extendedProps: {
        journal: "Tried to catch dip in XRP, poor entry",
        type: "profit",
      },
    },
    {
      title: "+$200",
      date: "2025-08-22", // Friday
      extendedProps: { journal: "Scalped BTC range breakout", type: "profit" },
    },
    {
      title: "+$100",
      date: "2025-08-23", // Saturday
      extendedProps: {
        journal: "MATIC short on rejection, quick exit",
        type: "profit",
      },
    },
    {
      title: "-$60",
      date: "2025-08-24", // Sunday
      extendedProps: {
        journal: "Tried DOGE breakout, got chopped",
        type: "loss",
      },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-gray-200 p-2 flex flex-col items-center">
      <div className="bg-neutral-950 shadow-lg w-full">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth",
          }}
          dayCellClassNames={(info) => {
            const dateStr = info.date.toLocaleDateString("en-CA");
            const eventForDay = events.find((e) => e.date === dateStr);

            if (eventForDay?.extendedProps?.type === "profit") {
              return "profit-cell";
            } else if (eventForDay?.extendedProps?.type === "loss") {
              return "loss-cell";
            }
            return "";
          }}
          eventClassNames={(arg) =>
            arg.event.extendedProps.type === "profit"
              ? "event-profit"
              : "event-loss"
          }
        />
      </div>
    </div>
  );
}

export default TradeCalendar;
