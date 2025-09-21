import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { MdOutlineCancel } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

const CalendarModal = ({ date, setDate, closeModal }) => {
  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center border border-black rounded-[1rem] p-[10px] w-[20rem]">
      <div className="flex w-full justify-between pb-4">
        <p>Calendar</p>
        <button onClick={closeModal}>
          <RiArrowGoBackFill style={{ color: '#FF6767' }} />
        </button>
      </div>

      <div className="pb-3 flex items-center gap-2">
        <input
          type="date"
          value={formatDateForInput(date)}
          onChange={handleInputChange}
          className="outline-none bg-transparent text-black"
          style={{
            border: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none"
          }}
        />
        <button>
          <MdOutlineCancel />
        </button>
      </div>

      <Calendar
        onChange={setDate}
        value={date}
        className={'rounded-[10px]'}
      />
    </div>
  );
};

export default CalendarModal;
