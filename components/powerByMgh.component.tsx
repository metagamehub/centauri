import Image from 'next/image'

const PowerByMetagamehub = () => {
  return (
    <div className='absolute bottom-10 sm:bottom-24 text-white font-thin scale-50 sm:scale-100'>
      <p className='text-center text-2xl'>powered by</p>
      <div className='h-20 w-96'>
        <Image src={'/mgh_logo_text.svg'} fill={true} alt={'mgh logo with text'} />
      </div>
    </div>
  )
}

export default PowerByMetagamehub