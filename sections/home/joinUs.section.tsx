import Image from 'next/image'
import Button from '../../components/button.component'

const JoinUs = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-8'>
      <h2 className="text-center text-4xl sm:text-6xl sm:text-[5.25rem] font-bold leading-none">{'JOIN US IN UNLOCKING WEB3'}</h2>
      <div className="relative flex w-[500px] h-[700px] justify-center items-center scale-75 sm:scale-100">
        <div className='absolute w-[300px] h-[300px] sm:w-[421px] sm:h-[421px] bg-[#110128] rounded-full z-10 flex justify-center items-center'>
          <div className='relative w-[207px] h-[181px]'>
            <Image src={'/icons/metanode-dao.svg'} fill={true} alt={'metanode dao logo'} />
          </div>
        </div>
        <div className='absolute w-[400px] h-[400px] sm:w-[551px] sm:h-[551px] rounded-full bg-[#F3DE6B] blur-[100px]' />
      </div>
      <div className='text-center text-3xl sm:text-5xl'>
        <p>{'CENTAURI WEB3 CONSORTIUM IS PART OF'}</p>
        <p className='font-bold'>{'“THE METANODE DAO“'}</p>
      </div>
      <div className='my-60'>
        <Button label='Register here for more info' handleClick={() => { }} />
      </div>
    </div>
  )
}

export default JoinUs