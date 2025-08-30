import React, { useContext } from "react";
import userimage from "../assets/user.png";
import { OtherStates } from "../context/CreateContext";
function Header() {
  const { setIsOpen } = useContext(OtherStates);
  return (
    <header className="w-[100%] md:pl-[20%] bg-neutral-900 py-4 px-6 flex items-center justify-between shadow-md">
      <h1 className=" lg:flex hidden">h</h1>{" "}
      <div className="lg:hidden sm:flex items-center justify-center p-3 space-x-3 border-b ">
        <h1 className="text-white text-2xl font-bold font-serif">Tradzic</h1>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white text-sm hidden sm:block">Welcome</span>
        <img
          onClick={() => setIsOpen(true)}
          src={userimage}
          alt="User Profile"
          className="h-9 w-9 rounded-full object-cover border border-neutral-700"
        />
      </div>
    </header>
  );
}

export default Header;
