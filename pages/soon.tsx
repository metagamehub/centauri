import { NextPage } from 'next'
import Image from 'next/image'

// Components
import SocialIcon from '../components/socialIcon.component'
import PowerByMetagamehub from '../components/powerByMgh.component'

const Soon: NextPage = () => {
  const socialIconsData = [
    {
      imageUrl: '/icons/medium.svg',
      link: 'https://metagamehub.medium.com/',
      alt: 'medium link'
    },
    {
      imageUrl: '/icons/instagram.svg',
      link: 'https://www.instagram.com/metagamehub_dao/',
      alt: 'instagram link'
    },
    {
      imageUrl: '/icons/linkedin.svg',
      link: 'https://www.linkedin.com/company/metagamehub-dao/',
      alt: 'linkedin link'
    },
    {
      imageUrl: '/icons/twitter.svg',
      link: 'https://twitter.com/MGH_DAO',
      alt: 'twitter link'
    },
    {
      imageUrl: '/icons/telegram.svg',
      link: 'https://t.me/metagamehub_dao',
      alt: 'telegram link'
    },
    {
      imageUrl: '/icons/discord.svg',
      link: 'https://discord.com/invite/8WJVMDXZwH',
      alt: 'discord link'
    },
    {
      imageUrl: '/icons/youtube.svg',
      link: 'https://www.youtube.com/@mgh-metaversedevgroup1493',
      alt: 'youtube link'
    },
    {
      imageUrl: '/icons/ether.svg',
      link: 'https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656',
      alt: 'etherscan link'
    },
  ]

  return (
    <div className='flex justify-center items-center w-full h-screen relative bg-[url("/bg.png")] bg-cover bg-center bg-no-repeat px-8'>

      {/* Corners */}
      <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white' />
      <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white' />
      <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white' />
      <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white' />

      {/* Center Circle */}
      <div className='absolute w-[300px] h-[300px] sm:w-[446px] sm:h-[446px] border-t-2 border-white rounded-full ' />

      {/* Main */}
      <div className='flex flex-col justify-center items-center relative h-fit text-white text-center mb-20'>
        <h1 className='text-5xl md:text-8xl tracking-wide font-extralight'>Comming Soon</h1>
        <div className='py-5 font-medium text-base sm:text-xl tracking-widest'>
          <p>WE ARE STILL BUILDING THIS VIEW</p>
          <p>IN THE MEANTIME, PLEASE STAY IN TOUCH  :)</p>
        </div>
        <div className='flex flex-wrap justify-center gap-2 lg:gap-8'>
          {socialIconsData.map((icon, index) => <SocialIcon key={index} imageUrl={icon.imageUrl} link={icon.link} alt={icon.alt} />)}
        </div>
      </div>

      {/* Powered by metagamehub */}
      <PowerByMetagamehub />
    </div>
  )
}

export default Soon