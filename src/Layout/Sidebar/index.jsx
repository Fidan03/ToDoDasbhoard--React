import React, { useState } from 'react';
import dashboardData from '../../Data/DashboardData/index.js'
import sample from '../../assets/sample.jpeg';
import { RxExit } from "react-icons/rx";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(0);  

  return (
    <div className="bg-black text-white mt-32 w-65 relative rounded-r-[10px] flex flex-col justify-between">
      <div>
      <div className="group cursor-pointer">
        <div className="flex justify-center rounded-full">
          <img
            src={sample}
            alt="User"
            className="rounded-full size-20 border-3 border-white relative bottom-10 object-cover object-top"
          />
        </div>

        <div className="flex flex-col items-center relative">
          <p className="relative bottom-5">fidan</p>
          <p className="relative bottom-5 text-gray-300">xelilovafidan61@gmail.com</p>
        </div>
      </div>

      <div className="inline-block">
        {dashboardData.map((item) => {
          const Icon = item.icon;
          return (
            <button
              id={item.id}
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`flex gap-7 items-center mt-7 ml-7 cursor-pointer w-full px-2 py-1 rounded-md ${
                activeId === item.id ? 'bg-white text-[var(--color-pink)]' : ''}`}>
              <Icon style={{color: activeId === item.id ? 'var(--color-pink)' : 'white'}}/>
              <p className="text-[17px]">{item.p}</p>
            </button>
          );
        })}
      </div>
      </div>


      <div className='mt-70'>
        <button
          onClick={() => setActiveId("logout")}
          className={`flex gap-5 items-end mb-4 ml-7 cursor-pointer w-full px-2 py-1 rounded-md ${
            activeId === "logout" ? "bg-white text-[var(--color-pink)]" : ""
          }`}
        >
          <RxExit style={{ color: activeId === "logout" ? "var(--color-pink)" : "white" }} />
          <p className="text-[17px]">Logout</p>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
