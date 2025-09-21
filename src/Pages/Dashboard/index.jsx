
import AvatarInviteGroup from '../../Components/AvatarInviteGroup/index'
import hello from '../../assets/hello.webp'
import ToDoDashboard from '../../Components/ToDoDashboard/index'
import TaskStatusDashboard from '../../Components/TaskStatusDashboard/index'
import CompletedTaskDashboard from '../../Components/CompletedTaskDashboard'

const Dashboard = () => {
  
  return (
    <div className='w-[1280px] py-12 px-15'>
      <div className='flex justify-between mb-10'>
        <h1 className='flex items-center text-3xl font-medium'>Welcome back, fidan
          <span>
            <img src={hello} alt="hello" className='size-5'/>
          </span>
        </h1>

        <div>
          <AvatarInviteGroup/>
        </div>
      </div>

      <div className='border border-[var(--color-border)] flex justify-between p-5'>
        <div>
          <ToDoDashboard/>
        </div>
        <div className='flex flex-col justify-between'>
          <div><TaskStatusDashboard/></div>
          <div><CompletedTaskDashboard/></div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard