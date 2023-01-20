import Image from 'next/image'

const Ecosystem = () => {
  return (
    <div className="relative grid 2xl:grid-cols-2 gap-20 w-full justify-items-center">
      {/* Main sections */}
      <p className='bg-blured p-20 mx-0 text-4xl md:text-7xl mt-36 rounded-xl text-center'>
        CENTAURI<br />
        WEB3<br />
        CONSORTIUM<br />
        <span className="font-bold text-5xl md:text-8xl">
          ECOSYSTEM
        </span>
      </p>
      <div className='relative flex flex-wrap p-24 mx-0 justify-center items-center mt-20 2xl:mt-0 2xl:mr-20 bg-blured rounded-xl scale-75 lg:scale-100'>
        {/* Floating sections */}
        <div className="absolute w-[250px] h-[250px] -top-[270px] sm:-top-[125px] sm:-left-[82px] 2xl:-left-[125px] bg-blured-floating flex justify-center items-center">
          <Image src={`/icons/metanode-dao.svg`} alt={`metanode dao logo`} width={200} height={200} />
        </div>
        <div className='absolute w-[250px] h-[250px] -bottom-[270px] sm:-bottom-[82px] sm:-right-[82px] bg-blured-floating flex flex-col justify-center items-center text-center text-2xl'>
          <p className='mb-14'>The founders <br /> consist of</p>
          <p>ABC</p>
          <p>XYZ</p>
        </div>

        <div className="relative w-[432px] h-[432px] rounded-full flex justify-center items-center bg-white bg-opacity-5 border-morph text-2xl">
          <p className='absolute right-0'>L1: Governing and Operationg <br /> Council (elected & via loyalty)</p>
          <p className='absolute top-20 left-40 lg:top-20 lg:right-0'>L2: Diamond Members</p>
          <p className='absolute top-0  lg:top-4'>L3: Gold and Platinum Members</p>
        </div>
        <div className="absolute w-[334px] h-[334px] rounded-full bg-white bg-opacity-5 border-morph" />
        <div className="absolute w-[221px] h-[221px] rounded-full bg-white bg-opacity-5 border-morph" />
      </div>
    </div>
  )
}

export default Ecosystem