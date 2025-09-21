import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import invitedata from '../../Data/InviteData/index'

const AvatarGroupComp = () => {
  return (
    <div>
    <AvatarGroup total={6} className='flex gap-2' variant='rounded'>
            {invitedata.map ((data) => {
                return (
                    <Avatar alt={data.alt} src={data.image} key={data.id} id={data.id} 
                    variant='square' style={{borderRadius: '10px'}}/>
                )
            })}
    </AvatarGroup>
    </div>
  )
}

export default AvatarGroupComp