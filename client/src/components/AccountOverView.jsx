function AccountOverView() {
  return (
    <>
      <div className="w-[95%] lg:w-[100%] h-[20vh] lg:h-[24vh] p-5 lg:p-7  items-start justify-start bg-neutral-900  flex flex-col ">
        <div
          className="flex   w-full 
         flex-row items-center justify-between"
        >
          {" "}
          <h1 className="text-l text-gray-300 ">Account Overview</h1>
          <div className="">---</div>
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-col border-y-0 border border-l-0 border-gray-300 p-2 w-[50%] items-start">
            {" "}
            <div className="flex flex-row items-center gap-1 justify-center">
              {" "}
              <h1 className="text-2xl text-gray-300">$35,000</h1>
              <h3 className="text-green-500">^35%</h3>
            </div>
            <h3 className="text-gray-500 text-sm">Accum Return</h3>
          </div>

          <div className="flex flex-col pl-10 p-2 w-[50%] items-start">
            {" "}
            <div className="flex flex-row items-center gap-1 justify-center">
              {" "}
              <h1 className="text-2xl text-gray-300">$30</h1>
              <h3 className="text-green-500">^5%</h3>
            </div>
            <h3 className="text-gray-500 text-sm">Unrealised pnl</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountOverView;
