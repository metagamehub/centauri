import Link from 'next/link'
import PowerByMetagamehub from '../powerByMgh.component'

const Greet = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center text-white bg-[url("/bg.png")] bg-cover bg-center bg-no-repeat'>
      {/* Corners */}
      <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white' />
      <p className='absolute flex w-fit px-10 h-12 top-40 xl:top-24 xl:left-24 justify-center items-end tracking-[0.5em] font-semibold'>ABOUT US</p>
      <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white' />
      <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white' />
      <p className='absolute flex w-fit px-10 h-12 bottom-48 xl:bottom-24 xl:right-24 justify-center items-start tracking-[0.5em] font-semibold'>INTERESTED? </p>
      <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white' />

      {/* Center Circle */}
      <div className='absolute w-[300px] h-[300px] sm:w-[446px] sm:h-[446px] border-t-2 border-white rounded-full ' />
      <div className='absolute w-[300px] h-[300px] sm:w-[446px] sm:h-[446px] border-b-2 border-white rounded-full ' />

      {/* Header */}
      <div className='absolute top-24 text-center'>
        <p className='text-xl sm:text-3xl tracking-[0.35em] font-normal'>{'CENTAURI WEB3 CONSORTIUM'}</p>
        <p className='text-base sm:text-xl tracking-wide font-medium'>{'Standardizing web3 to unlock its full potential'}</p>
      </div>

      {/* Main */}
      <Link
        href='/education'
        className='flex flex-col justify-center items-center relative h-fit text-center'
      >
        <h1 className='text-5xl sm:text-8xl tracking-wide font-light'>Enter the <br /><span className="font-semibold">{'METANODE'}</span></h1>
      </Link>

      {/* Powered by metagamehub */}
      <PowerByMetagamehub />
    </div>
  )
}

export default Greet