import React from 'react'

const NanButton = ({icon}) => {
  return (
    <button className='bg-[var(--color-pink)] size-[24px] flex items-center justify-center rounded-[5px]'>{icon}</button>
  )
}

export default NanButton