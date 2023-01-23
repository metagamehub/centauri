import Image from 'next/image'

// Components
import PowerByMetagamehub from '../powerByMgh.component'

const Greet = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>
      <div className='relative flex flex-col justify-center items-center h-fit text-center'>
        <Image src={'/icons/metanode-dao.svg'} alt={'mgh logo with text'} width={182} height={160} className='absolute -top-48' />
        <h1 className='text-2xl sm:text-4xl font-normal tracking-wide leading-tight sm:leading-loose'>CENTAURI WEB3 CONSORTIUM<br />
          <span className="text-4xl sm:text-[5.25rem] font-bold">{'THE METANODE'}</span>
        </h1>
      </div>

      {/* Powered by metagamehub */}
      <PowerByMetagamehub />
    </div>
  )
}

export default Greet