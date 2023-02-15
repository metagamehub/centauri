import Image from 'next/image'

const Cards = ({ label, imageUrl }: { label: string, imageUrl: string }) => {
  return (
    <div className="w-[273px] px-2 py-5 bg-white bg-opacity-10 rounded-xl border-t-4 border-l-4 border-white border-opacity-10">
      <div className="relative w-full border-t-4 border-l-4 border-white border-opacity-10">
        <Image src={`/test/${imageUrl}.svg`} alt={label} width={255} height={243} />
        <p className="text-center text-2xl h-16 flex justify-center items-center">{label}</p>
      </div>
    </div>
  )
}

const CircleCard = () => {
  return (
    <div className='w-[335px] h-[335px] p-2 bg-white bg-opacity-10 rounded-full border-t-4 border-l-4 border-white border-opacity-10' >
      <div className='w-full h-full bg-white bg-opacity-5 rounded-full flex items-center border-t-[3px] border-l-[3px] border-white border-opacity-10'>
        <p className='w-full text-center text-3xl'>THE METANODE PLATFORM AND GOVERNANCE</p>
      </div>
    </div>
  )
}

const SimpleArrow = () => {
  return (
    <div className={`relative w-fit flex justify-center items-center px-5 origin-center rotate-90`}>
      <div className="relative w-10 border-2">
        <div className="absolute origin-center rotate-45 border-t-[5px] border-r-[5px] w-4 h-4 right-0 -top-2" />
      </div>
    </div>
  )
}

const ElbowArrow = () => {
  return (
    <div className={`relative w-fit flex justify-center items-center px-5 origin-center`}>
      <div className="relative w-24 h-10 border-b-[5px] border-l-[5px]">
        <div className="absolute origin-center rotate-45 border-t-[5px] border-r-[5px] w-4 h-4 right-0 -bottom-[10px]" />
      </div>
    </div>
  )
}

const Solution = () => {
  return (
    <div className='w-full flex flex-col 2xl:flex-row md:gap-20 px-10 sm:px-0 justify-around items-center md:mb-40'>
      <h2 className='w-fit text-4xl sm:text-7xl font-normal text-center 2xl:text-left'>CENTAURI<br />WEB3<br />CONSORTIUM<br />
        <span className="text-5xl sm:text-8xl font-bold text-[#627BFF]">SOLUTION</span>
      </h2>

      {/* Graph */}
      <div className='relative w-[900px] h-[800px] flex justify-center items-center scale-[.35] sm:scale-75 lg:scale-100'>
        <div className='absolute top-0 left-0'><Cards label='INDIVIDUALS' imageUrl='test-image-1' /></div>
        <div className='absolute left-28'><ElbowArrow /></div>
        <div className='absolute top-16 '>
          <p className='text-center max-w-[282px] font-bold px-2 py-5 bg-white bg-opacity-10 rounded-md border-t-4 border-l-4 border-white border-opacity-10 text-lg'>
            Gamified Membership in return for educations, standards and project executions
          </p>
        </div>
        <div className='absolute top-0 right-0'><Cards label='BUSINESS AND INSTITUTIONS' imageUrl='test-image-2' /></div>
        <div className='absolute right-28 scale-x-[-1]'><ElbowArrow /></div>
        <CircleCard />
        <div className='absolute bottom-48'><SimpleArrow /></div>
        <div className='absolute bottom-[168px] right-40'>
          <p className='font-bold max-w-[220px] text-left text-lg'>Initiatives to standardize and scale</p>
        </div>
        <div className='absolute bottom-0'>
          <p className='max-w-[368px] text-center text-3xl font-bold px-2 py-5 bg-white bg-opacity-10 rounded-md border-t-4 border-l-4 border-white border-opacity-10'>web3 industry and projects</p>
        </div>

      </div>
    </div>
  )
}

export default Solution