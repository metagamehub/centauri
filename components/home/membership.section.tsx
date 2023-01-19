import Image from 'next/image'

const Membership = () => {
  const oratorList = [
    'Exclusive membership with 1 vote',
    'Access to all resources available to members',
    '1 Avatar with Metaverse utility and customization',
    'Loylaty module and dynamic governance upgrades in shaping the direction of the consortium'
  ]
  return (
    <div className="w-full flex items-center justify-between mb-44">
      <h2 className="text-7xl font-normal max-w-2xl">YOUR CUSTOM CONSORTIUM MEMBERSHIP:</h2>
      <div className="flex flex-col justify-center items-center bg-blured-floating max-w-2xl px-28 py-16">
        {/* Circle decorator */}
        <div className='absolute -top-[88px] w-44 h-44 flex justify-center items-center bg-blured rounded-full'>
          <Image src={`/asset-orator.svg`} alt={`metanode dao logo`} width={108} height={108} />
        </div>

        <h3 className="text-5xl font-bold my-16">WEB3 ORATOR</h3>
        <ul className="list-disc text-2xl">
          {oratorList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Membership