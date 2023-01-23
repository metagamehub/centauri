import Image from 'next/image'

const Membership = () => {
  const oratorList = [
    'Exclusive membership with 1 vote',
    'Access to all resources available to members',
    '1 Avatar with Metaverse utility and customization',
    'Loylaty module and dynamic governance upgrades in shaping the direction of the consortium'
  ]
  return (
    <div className="w-full flex flex-col gap-36 xl:gap-0 xl:flex-row items-center 2xl:justify-center mb-44">
      <h2 className="text-5xl sm:text-7xl font-normal max-w-2xl text-center xl:text-left">YOUR CUSTOM CONSORTIUM MEMBERSHIP:</h2>
      <div className="relative flex flex-col justify-center items-center max-w-2xl">

        <div className='w-full h-full gm-medium gm-border px-10 sm:px-28 py-16'>
          <h3 className="text-5xl font-bold my-16 text-center sm:text-left">WEB3 ORATOR</h3>
          <ul className="list-disc text-2xl">
            {oratorList.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        {/* Circle decorator */}
        <div className='absolute -top-[88px] w-44 h-44 flex justify-center items-center rounded-full gm-soft gm-border'>
          <Image src={`/asset-orator.svg`} alt={`metanode dao logo`} width={108} height={108} />
        </div>
      </div>
    </div>
  )
}

export default Membership