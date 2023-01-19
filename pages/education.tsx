import { NextPage } from 'next'
import Image from 'next/image'

// Components
import Footer from '../components/footer.component'

const Education: NextPage = () => {
  return (
    <div className='overflow-x-hidden text-white'>
      <div className='w-full h-screen relative flex justify-center items-center'>
        {/* Main */}
        <div className='relative flex flex-col justify-center items-center h-fit text-center'>
          <Image src={'/icons/metanode-dao.svg'} alt={'mgh logo with text'} width={182} height={160} className='absolute -top-48' />
          <h1 className='text-4xl font-normal tracking-wide leading-tight'>CENTAURI WEB3 CONSORTIUM<br />
            <span className="text-[5.25rem] font-bold">{'THE METANODE'}</span>
          </h1>
        </div>

        {/* Powered by metagamehub */}
        <div className='absolute bottom-8 lg:bottom-24 font-thin'>
          <p className='text-center text-2xl'>{'powered by'}</p>
          <div className='h-20 w-96'>
            <Image src={'/mgh_logo_text.svg'} fill={true} alt={'mgh logo with text'} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Education