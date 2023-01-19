import Image from 'next/image'

const PartnerCard = ({ logo, description }: { logo: string, description: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-80">
      <div className='relative w-full h-40 mb-10'>
        <Image src={`/partners/${logo}.svg`} fill={true} alt={`${logo} logo`} />
      </div>
      <p className='w-full text-center text-lg font-light leading-tight'>{description}</p>
    </div>
  )
}

const Partners = () => {
  const partners = [
    {
      logo: 'polygon',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'ocean',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'chainlink',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'decentraland',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'weown',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'ekolance',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'sandbox',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'detecon',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    },
    {
      logo: 'frankfurt',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."'
    }
  ]

  return (
    <div className='flex flex-wrap gap-20 backdrop-blur-[82.4px] bg-white bg-opacity-10 px-28 py-32 rounded-xl mx-0 justify-center items-center border-white border-opacity-20 border-l-2 border-t-2'>
      <p className='col-span-3 text-5xl font-normal text-center w-full mb-10'>{'Founding Partners'}</p>
      {partners.map((partner, index) => <PartnerCard key={index} logo={partner.logo} description={partner.description} />)}
    </div>
  )
}

export default Partners