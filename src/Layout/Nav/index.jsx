import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { PiBellSimpleRingingLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import DateDisplay from '../../Components/DateDisplay';
import CalendarModal from '../../Components/CalendarModal';
import NavButton from '../../Components/NavButton';

const Nav = ({ logo }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='bg-[var(--color-creme)]'>
      <div className='flex justify-between p-2 max-w-[90%] m-auto items-center'>
        {logo === "Dashboard" ? 
          <div className='font-bold text-[20px]'><span className='text-[var(--color-pink)]'>Dash</span>board</div> : 
          <div className='font-bold text-[20px]'><span className='text-[var(--color-pink)]'>To</span>-Do</div>}
        
        <div className='w-[40rem] flex bg-white justify-between shadow-[0px_1px_10px_0px_rgba(0,0,0,0.26)] rounded-[5px]'>
          <input type="text" placeholder='Search your task here...' 
            className='w-[95%] bg-white rounded-l-[5px] cursor-pointer focus:outline-none pl-2'/>
          <NavButton icon={<CiSearch style={{color: 'white'}}/>}/>
        </div>

        <div className='flex items-center gap-10'>
          <div className='flex gap-2'>
            <NavButton icon={<PiBellSimpleRingingLight style={{color: 'white'}}/>}/>
            <NavButton onClick={() => setShowCalendar(!showCalendar)} icon={<IoCalendarOutline  style={{color: 'white'}}/>}/>
          </div>

          <div>
            <DateDisplay currentDate={selectedDate} />
          </div>

          {showCalendar && (
            <div className="absolute top-20 right-10 z-50">
              <CalendarModal 
                date={selectedDate} 
                setDate={setSelectedDate} 
                closeModal={() => setShowCalendar(false)} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
