import React from 'react'
import { BiTask } from "react-icons/bi";
import CompletedTaskSection from '../CompletedTaskSection';


const CompletedTaskDashboard = () => {
  return (
    <div className='border border-[var(--color-border)] rounded-[15px] p-5 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]'>
      <div className="flex items-center mb-5">
          <BiTask style={{color: 'gray', fontSize: '25px'}}/>
          <p className="text-[var(--color-pink)] text-2">Completed Task</p>
      </div>

      <div>
        <CompletedTaskSection/>
      </div>
    </div>
  )
}

export default CompletedTaskDashboard