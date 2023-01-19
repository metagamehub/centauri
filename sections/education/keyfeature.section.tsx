import Image from 'next/image'

const KeyFeatures = () => {
  const featureList = [
    'Interactive sessions with industry leaders and experts',
    'Focus on different industries and sectors each month',
    'Real-world case studies and best practices',
    'Opportunities to ask questions and engage in discussions',
    'Convenient online format accessible from anywhere',
    "Best of all? It's all absolutely free!"
  ]

  return (
    <div className='relative flex justify-center items-center bg-blured p-20 gap-20'>
      <div className='w-10 h-20 bg-white absolute'/>
      {/* <div className="absolute w-[181px] h-[181px] border-morph rounded-full bottom-10">
        <div className='relative w-full'>
          <Image src={`/icons/target-shooting.svg`} alt={`shooting target icon`} width={102} height={102} />
        </div>
      </div> */}
      <h2 className='w-1/2 text-6xl font-medium'>Key features of our seminars include:</h2>
      <ul className='w-1/2 text-2xl font-light list-disc'>
        {featureList.map((feature, index) => <li key={index} className="">{feature}</li>)}
      </ul>
    </div>
  )
}

export default KeyFeatures