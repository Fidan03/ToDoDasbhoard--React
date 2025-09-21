import Progress from '../Progress';


const ProgressSection = () => {
  return (
    <div className='flex gap-10'>

        <Progress
        color={'green'}
        num={85}
        status={'Completed'}
        />

        <Progress
        color={'blue'}
        num={46}
        status={'In Progress'}
        />

        <Progress
        color={'red'}
        num={13}
        status={'Not Started'}
        />
    </div>
  )
}

export default ProgressSection