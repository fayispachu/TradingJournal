import React, { useState } from "react";
import { OtherStates } from "./CreateContext";

export const OtherContextProvider = ({ children }) => {
  const [isAddTradeOpen, setIsAddTradeOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openAddTrade = () => {
    setIsAddTradeOpen(true);
  };

  const closeAddTrade = () => {
    setIsAddTradeOpen(false);
  };

  return (
    <OtherStates.Provider
      value={{ isAddTradeOpen, openAddTrade, closeAddTrade, isOpen,setIsOpen }}
    >
      {children}
    </OtherStates.Provider>
  );
};
