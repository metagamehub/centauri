const ItemPrinter = ({ title, description }: { title: string, description: string }) => {
  return (
    <div>
      <h3 className='font-black'>{title}</h3>
      <p className="font-normal">{description}</p>
    </div>
  )
}

const Consortium = () => {
  const items = [
    {
      title: 'FOR WHO?:',
      description: 'Businesses and creators'
    },
    {
      title: 'WHAT:',
      description: 'Educating, Standardizing and Enabling web3 adoption through the first ever true web3 consortium'
    },
    {
      title: 'HOW:',
      description: 'By Building “The Metanode” - a platform where businesses, creators, investors, government officials and web3 experts come together and co-create, co-govern and co-enable standards for web3 in a gamified and web3 native environment'
    }
  ]

  return (
    <div className='flex flex-col gap-20 bg-blured px-10 lg:px-[182px] py-32 rounded-xl mx-0'>
      <div className='flex justify-end'>
        <h2 className='max-w-4xl text-5xl sm:text-7xl md:text-[5.25rem] font-light leading-none'>{'THE CENTAURI WEB3 CONSORTIUM'}</h2>
      </div>

      <div className='flex flex-col max-w-2xl text-2xl gap-5'>
        {items.map((item, index) => <ItemPrinter title={item.title} description={item.description} key={index} />)}
      </div>

    </div>
  )
}

export default Consortium