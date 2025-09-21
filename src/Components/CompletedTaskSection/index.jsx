import React from 'react'
import TaskCard from '../TaskCard';

const CompletedTaskSection = () => {
  return (
    <div className='flex flex-col gap-5'>
        <TaskCard
            priority='Moderate'
            status='In Progress'
            statusColor='red'
            priorityColor='var(--color-moderate)'
            complationDate='5'
            isCompleted={false}
        />

        <TaskCard
            priority='Moderate'
            status='In Progress'
            statusColor='red'
            priorityColor='var(--color-moderate)'
            complationDate='5'
            isCompleted={false}
        />
    </div>
  )
}

export default CompletedTaskSection