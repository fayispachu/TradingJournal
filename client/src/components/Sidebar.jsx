import React, { useContext } from "react";
import {
  Home,
  Calendar,
  Repeat,
  User,
  Power,
  FileText,
  Shield,
  HelpCircle,
  Info,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { OtherStates } from "../context/CreateContext";

function Sidebar() {
  const { isOpen, setIsOpen } = useContext(OtherStates);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[70%] lg:w-[17%] bg-neutral-900 border-r border-neutral-700 flex-col p-3 gap-4 text-gray-300 z-50 transform transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex`}
      >
        {" "}
        <div className="flex items-center justify-center p-3 space-x-3 border-b ">
          <h1 className="text-white text-2xl font-bold font-serif">Tradzic</h1>
        </div>
        <div className="flex justify-end lg:hidden mb-3">
          <button onClick={() => setIsOpen(false)} className="text-gray-300">
            ✕
          </button>
        </div>
        {/* Top Sidebar items */}
        <ScrollLink
          to="dashboard"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <Home size={20} />
            <span>Home</span>
          </div>
        </ScrollLink>
        <ScrollLink
          to="calendar"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <Calendar size={20} />
            <span>Calendar</span>
          </div>
        </ScrollLink>
        <ScrollLink
          to="trades"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <Repeat size={20} />
            <span>History</span>
          </div>
        </ScrollLink>
        {/* <ScrollLink
          to="account"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <User size={20} />
            <span>Account</span>
          </div>
        </ScrollLink> */}
        {/* <ScrollLink
          to="terms"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <FileText size={20} />
            <span>Terms & Conditions</span>
          </div>
        </ScrollLink> */}
        {/* <ScrollLink
          to="privacy"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <Shield size={20} />
            <span>Privacy Policy</span>
          </div>
        </ScrollLink> */}
        <ScrollLink
          to="help"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <HelpCircle size={20} />
            <span>Help</span>
          </div>
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer"
        >
          <div className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <Info size={20} />
            <span>About</span>
          </div>
        </ScrollLink>
        {/* Logout stays at bottom */}
        <div className="mt-auto">
          <button className="flex flex-row p-3 items-center gap-2 text-xs hover:text-white bg-neutral-800 w-full">
            <Power size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
