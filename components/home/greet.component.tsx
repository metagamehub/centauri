import Image from 'next/image'

const Greet = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center text-white">
      {/* Corners */}
      <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white' />
      <p className='absolute flex w-fit px-10 h-12 top-8 left-8 lg:top-24 lg:left-24 justify-center items-end tracking-[0.5em] font-semibold'>ABOUT US</p>
      <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white' />
      <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white' />
      <p className='absolute flex w-fit px-10 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 justify-center items-start tracking-[0.5em] font-semibold'>INTERESTED? </p>
      <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white' />

      {/* Center Circle */}
      <div className='absolute w-[446px] h-[446px] border-t-2 border-white rounded-full ' />
      <div className='absolute w-[446px] h-[446px] border-b-2 border-white rounded-full ' />

      {/* Header */}
      <div className='absolute top-8 lg:top-24 text-center'>
        <p className='text-3xl tracking-[0.35em] font-normal'>CENTAURI WEB3 CONSORTIUM </p>
        <p className='text-xl tracking-wide font-medium'>Standardizing web3 to unlock its full potential</p>
      </div>

      {/* Main */}
      <div className='flex flex-col justify-center items-center relative h-fit text-center'>
        <h1 className='text-8xl tracking-wide font-light'>Enter the <br /><span className="font-semibold">METANODE</span></h1>
      </div>

      {/* Powered by metagamehub */}
      <div className='absolute bottom-8 lg:bottom-24 font-thin'>
        <p className='text-center'>powered by</p>
        <div className='h-20 w-96'>
          <Image src={'/mgh_logo_text.svg'} fill={true} alt={'mgh logo with text'} />
        </div>
      </div>
    </div>
  )
}

export default Greet