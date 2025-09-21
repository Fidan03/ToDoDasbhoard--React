
import { BsFillPeopleFill } from "react-icons/bs";
import AvatarGroupComp from "../AvatarGroupComp";


const index = () => {
  return (
    <div className="flex">
      <div>
        <AvatarGroupComp/>
      </div>

      <button className='flex items-center gap-2 text-[var(--color-pink)] border py-2 px-3 rounded-[5px]'>
        <BsFillPeopleFill style={{color: 'var(--color-pink)'}}/>
        Invite
      </button>
    </div>
  )
}

export default index