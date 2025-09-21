import React from 'react'
import OneProgressBar from '../OneProgressBar/index';
import { GoDotFill } from "react-icons/go";

const Progress = ({color, num, status}) => {
  return (
        <div className='flex flex-col items-center gap-5'>
            <OneProgressBar 
            color={color}
            num={num}
            />
            <div className='flex items-center'>
                <GoDotFill style={{color:color}}/>
                <p>{status}</p>
            </div>
        </div>
  )
}

export default Progress