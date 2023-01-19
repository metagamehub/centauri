const WhoAreWe = () => {
  return (
    <div className='w-full grid lg:grid-cols-2 justify-center items-center gap-28'>
      <div className='relative flex justify-center items-center h-[421px]'>
        <div className='absolute w-[421px] h-[421px] rounded-full bg-[#F3DE6B] blur-[100px]' />
        <div className='absolute w-[421px] h-[421px] rounded-full bg-black' />
        <h2 className='absolute text-[7.25rem] leading-none font-bold w-64 right-20'>{'WHO ARE WE?'}</h2>
      </div>
      <p className='text-2xl max-w-3xl font-thin leading-relaxed'>{'The Centauri Web3 Consortium is dedicated to fostering the development and adoption of web3 through the creation of open and transparent standards. Our goal is to build a harmonized and scalable ecosystem with interoperability at its core. We strive to educate, standardize, and enable web3 adoption for businesses and creators alike by developing "The Metanode" hive, a platform that brings together the best of web3 technology and makes it accessible and user-friendly for all. We invite you to join us in shaping the future of the web.'}</p>
    </div>
  )
}

export default WhoAreWe