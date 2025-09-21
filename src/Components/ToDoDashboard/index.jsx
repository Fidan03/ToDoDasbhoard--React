import { BiTask } from "react-icons/bi";
import ToDoTaskSection from "../ToDoTaskSection";



const ToDoDashboard = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('en-US', { month: 'long' });


  return (
    <div className="border border-[var(--color-border)] rounded-[15px] p-5 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]">
        <div>
            <div className="flex justify-between items-start">
                <div className="flex items-center mb-2">
                    <BiTask style={{color: 'gray', fontSize: '25px'}}/>
                    <p className="text-[var(--color-pink)] text-2">To-Do</p>
                </div>
                <button className="flex gap-1 items-center cursor-pointer">
                    <span className="text-[var(--color-pink)] text-[20px] font-medium">+</span>
                    <p className="text-gray-600">Add task</p>
                </button>
            </div>
            <div className="flex gap-1 text-2 mb-4">
                <p className="text-[15px] font-medium">{day}</p>
                <p className="mr-3 text-[15px] font-medium">{month}</p>
                <span className="text-gray-600 text-[15px]">Today</span>
            </div>
        </div>

        <div>
            <ToDoTaskSection/>
        </div>
    </div>
  )
}

export default ToDoDashboard