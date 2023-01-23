import Link from 'next/link'
import SocialIcon from './socialIcon.component'

const Footer = () => {
  return (
    <div className='text-white my-28'>
      {/* footer */}
      <div className='flex flex-col xl:flex-row justify-between items-center'>
        {/* footer contact */}
        <div className='xl:w-2/4 flex flex-col items-center'>
          <p className='text-lg text-center font-semibold mx-8'>Business & Partnership Proposals</p>
          <div className='flex justify-around xl:w-[57%] pt-32'>
            <SocialIcon imageUrl='/icons/medium.svg' link='https://metagamehub.medium.com/' alt='medium link' />
            <SocialIcon imageUrl='/icons/instagram.svg' link='https://www.instagram.com/metagamehub_dao/' alt='instagram link' />
            <SocialIcon imageUrl='/icons/linkedin.svg' link='https://www.linkedin.com/company/metagamehub-dao/' alt='linkedin link' />
            <SocialIcon imageUrl='/icons/twitter.svg' link='https://twitter.com/MGH_DAO' alt='twitter link' />
            <SocialIcon imageUrl='/icons/telegram.svg' link='https://t.me/metagamehub_dao' alt='telegram link' />
            <SocialIcon imageUrl='/icons/discord.svg' link='https://discord.com/invite/8WJVMDXZwH' alt='discord link' />
            <SocialIcon imageUrl='/icons/ether.svg' link='https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656' alt='etherscan link' />
          </div>
          {/* terms */}
          <div className='pt-16'>
            <p className='text-center text-[15px]'>
              <Link href='/soon'>
                <span>Terms of Use </span>
              </Link>
              |
              <Link href='/soon'>
                <span> Privacy Policy</span>
              </Link>
            </p>
          </div>
        </div>
        {/* footer links */}
        <div className='w-5/6 xl:w-2/4 flex justify-around items-center pt-20 xl:px-40 xl:pt-0'>
          <div className='text-xl leading-[43px]'>
            <Link href='/'><p>Home</p></Link>
            <Link href='/soon'><p>Treasury</p></Link>
            <Link href='/soon'><p>Tools</p></Link>
            <Link href='/soon'><p>Token</p></Link>
            <Link href='/soon'><p>Contributors</p></Link>
            <Link href='/soon'><p>Contribute</p></Link>
          </div>
          <div className='text-right xl:text-left text-xl leading-[43px] flex flex-col'>
            <a href="https://app.metagamehub.io/" target='_blank' rel='noreferrer' >MGH dApp</a>
            <a href="https://discord.com/invite/8WJVMDXZwH" target='_blank' rel='noreferrer' >Community</a>
            <a href="https://snapshot.org/#/metagamehub.eth" target='_blank' rel='noreferrer' >Voting</a>
            <a href="https://docs.metagamehub.io/" target='_blank' rel='noreferrer' >Learn more</a>
            <Link href='/soon'><p >FAQ</p></Link>
            <a href="https://github.com/metagamehub" target='_blank' rel='noreferrer' >GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer