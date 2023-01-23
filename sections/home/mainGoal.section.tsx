const MainGoal = () => {
  return (
    <div className='w-full grid lg:grid-cols-2 gap-28 my-36 sm:px-16'>
      <div className='w-full'>
        <h2 className='text-center text-8xl xl:text-[7.25rem] font-extralight leading-none'>{'THE MAIN GOAL'}</h2>
      </div>
      <div className='flex flex-col max-w-3xl justify-center items-center gap-10 px-5'>
        <p className='text-2xl max-w-3xl font-light leading-tight'>{'The main goal of the Centauri Web3 Consortium is to foster the development and adoption of web3 through the creation of open and transparent standards to build a harmonized and scalable ecosystem with interoperability at its core.'}</p>
        <p className='text-2xl max-w-3xl font-light leading-tight'>{'The Centauri Web3 Consortium is educating, standardizing and enabling web3 adoption for businesses and creators by building “The Metanode” hive.'}</p>
      </div>
    </div>
  )
}

export default MainGoal