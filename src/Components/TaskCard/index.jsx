import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import todo from '../../assets/todo.webp'

const TaskCard = ({priority, status, statusColor, startDate, priorityColor, complationDate, isCompleted}) => {
  return (
    <div className='border border-[var(--color-border)] rounded-[15px] w-110'>

            <div className='flex flex-col relative'>
                <div className='flex justify-between mx-1.5 relative -bottom-3.5'>
                    {isCompleted ? (
                        <FaRegCircle className='text-relative' style={{color: statusColor}}/>
                    ) : (
                        <FaRegCircle className='text-relative' style={{color: 'green'}}/>
                    )}
                    
                    <PiDotsThreeOutlineLight className='text-[var(--color-border)] realtive'/>
                </div>
                
                <div className='flex mx-7 gap-x-5'>
                <div className='flex flex-col gap-3 w-[60%]'> 
                    <p className='text-[20px] font-bold'>
                    Attend Nischal’s Birthday Party
                    </p>
                    <p className="text-[17px] text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                    Buy gifts on the way and pick up cake from the bakery. Buy gifts on the way and pick up cake from the bakery.
                    </p>
                </div>
                    <img src={todo} alt="Task's Image" className='size-30 rounded-[15px] object-cover'/>
                </div>

                
            </div>

        {isCompleted ? 
        
        (<div className='flex justify-between mx-6 my-2'>
            <div className='flex gap-3'>
                <p className='text-[13px]'>Priority: <span style={{color: priorityColor}}>{priority}</span></p>
                <p className='text-[13px]'>Status: <span style={{color: statusColor}}>{status}</span></p>
            </div>
            <p className='text-[13px] text-gray-400'>Created on: {startDate}</p>
        </div>)
        :
        (<div className='mx-6 mb-2'>
            <p className='text-[13px]'>Status: <span style={{color: 'green'}}>Completed</span></p>
            <p className='text-[13px] text-gray-400'>Completed {complationDate} days ago.</p>
        </div>
        )}


        
        
    </div>
  )
}

export default TaskCard