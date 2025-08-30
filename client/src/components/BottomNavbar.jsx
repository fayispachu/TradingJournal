import React, { useContext } from "react";
import { Home, Calendar, Repeat, User, Activity } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { OtherStates } from "../context/CreateContext";

function BottomNavbar() {
  const { openAddTrade } = useContext(OtherStates);

  return (
    <>
      <div className="fixed lg:hidden bottom-0 w-full bg-neutral-900 py-3 px-4 border-t border-neutral-700 z-50">
        <div className="flex justify-between items-center text-gray-300 text-xs">
          <ScrollLink to="dashboard" smooth duration={500} offset={-50}>
            <button className="flex flex-col items-center gap-1">
              <Home size={20} />
              <span>Dashboard</span>
            </button>
          </ScrollLink>

          <ScrollLink to="calendar" smooth duration={500} offset={-50}>
            <button className="flex flex-col items-center gap-1">
              <Calendar size={20} />
              <span>Calendar</span>
            </button>
          </ScrollLink>

          <button
            onClick={openAddTrade}
            className="flex flex-col items-center gap-1"
          >
            <Activity size={20} />
            <span>Trade</span>
          </button>

          <ScrollLink to="history" smooth duration={500} offset={-50}>
            <button className="flex flex-col items-center gap-1">
              <Repeat size={20} />
              <span>History</span>
            </button>
          </ScrollLink>

          <ScrollLink to="settings" smooth duration={500} offset={-50}>
            <button className="flex flex-col items-center gap-1">
              <User size={20} />
              <span>Account</span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </>
  );
}

export default BottomNavbar;
