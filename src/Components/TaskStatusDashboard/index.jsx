import React from 'react'
import { BiTask } from "react-icons/bi";
import ProgressSection from '../ProgressSection';

const TaskStatusDashboard = () => {
  return (
    <div className='border border-[var(--color-border)] rounded-[15px] p-5 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]'>
      <div className='flex gap-2'>
        <BiTask style={{color: 'gray', fontSize: '25px'}}/>
        <p className="text-[var(--color-pink)] text-2">Task Status</p>
      </div>
      
      <div className='mt-5'>
        <ProgressSection/>
      </div>


    </div>
  )
}

export default TaskStatusDashboard