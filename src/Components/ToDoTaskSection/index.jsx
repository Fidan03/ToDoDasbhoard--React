import React from 'react'
import TaskCard from '../TaskCard/index'


const ToDoTaskSection = () => {
  return (
    <div className="flex justify-center flex-col gap-5">
        <TaskCard
        priority='Moderate'
        status='Not Started'
        statusColor='red'
        priorityColor='var(--color-moderate)'
        startDate='20/06/2025'
        isCompleted={true}
        />
        <TaskCard
        priority='Moderate'
        status='In Progress'
        statusColor='blue'
        priorityColor='var(--color-moderate)'
        startDate='20/06/2025'
        isCompleted={true}
        />
        <hr className="text-[var(--color-border)] my-6"/>
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

export default ToDoTaskSection