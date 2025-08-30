import React from "react";
import AccountOverView from "../components/AccountOverView";
import AccountPerfomance from "../components/AccountPerfomance";
import SortDate from "../components/SortDate";
import PerformanceCard from "../components/PerfomanceCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomNavbar from "../components/BottomNavbar";
import TradeHistory from "../components/TradeHistory";
import TradeCalendar from "../components/TradeCalendar";
import AddTrade from "../components/AddTrade";

function Home() {
  return (
    <>
      <Header />
      <Sidebar />

      <div className="lg:w-[83%] w-full   h-full pb-5 gap-4 flex flex-col pt-5 lg:pl-5 items-center lg:items-start  bg-neutral-950 lg:ml-[17%] min-h-screen">
        <div className="flex lg:flex-row flex-col w-full lg:w-[100%]  gap-2  items-start  justify-start   ">
          <div className="flex flex-col w-[100%] lg:w-[50%]  items-center ">
            <AccountOverView />
            <SortDate />
            <PerformanceCard />
          </div>
          <AccountPerfomance />
        </div>
        <TradeHistory />
        <TradeCalendar />
      </div>
      <AddTrade />
      <BottomNavbar />
    </>
  );
}

export default Home;
