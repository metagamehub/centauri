import Image from 'next/image'

const Ecosystem = () => {
  return (
    <div className="relative flex flex-wrap justify-center items-center gap-20 w-full">
      {/* Main sections */}
      <p className=' p-20 mx-0 text-4xl md:text-7xl mt-36 rounded-xl text-center gm-medium gm-border'>
        CENTAURI<br />
        WEB3<br />
        CONSORTIUM<br />
        <span className="font-bold text-5xl md:text-8xl">
          ECOSYSTEM
        </span>
      </p>
      <div className='relative scale-75 lg:scale-100 flex justify-center items-center'>
        <div className='flex flex-wrap p-24 mx-0 justify-center items-center mt-20 2xl:mt-0 2xl:mr-20 rounded-xl gm-medium border-t-4 border-l-4 border-white border-opacity-10'>
          <div className="relative w-[432px] h-[432px] rounded-full flex justify-center items-center bg-white bg-opacity-5 text-2xl gm-border text-left">
            <p className='absolute lg:right-0'>L1: Governing and Operationg <br /> Council (elected & via loyalty)</p>
            <p className='absolute top-20 md:left-40 lg:top-20 lg:right-0'>L2: Diamond Members</p>
            <p className='absolute top-0 lg:top-4'>L3: Gold and Platinum Members</p>
          </div>
          <div className="absolute w-[334px] h-[334px] rounded-full bg-white bg-opacity-5 gm-border" />
          <div className="absolute w-[221px] h-[221px] rounded-full bg-white bg-opacity-5 gm-border" />
        </div>
        {/* Floating sections */}
        <div className="absolute w-[250px] h-[250px] -top-[190px] sm:-top-[125px] sm:-left-[82px] 2xl:-left-[125px] flex justify-center items-center gm-soft border-t-4 border-l-4 border-white border-opacity-10">
          <Image src={`/icons/metanode-dao.svg`} alt={`metanode dao logo`} width={200} height={200} />
        </div>
        <div className='absolute w-[250px] h-[250px] -bottom-[270px] sm:-bottom-[82px] sm:-right-[82px] flex flex-col justify-center items-center text-center text-2xl gm-soft gm-border'>
          <p className='mb-14'>The founders <br /> consist of</p>
          <p>ABC</p>
          <p>XYZ</p>
        </div>
      </div>

    </div>
  )
}

export default Ecosystem