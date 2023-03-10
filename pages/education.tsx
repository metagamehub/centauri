import { NextPage } from 'next'
import Head from 'next/head'

// Components
import Footer from '../components/footer.component'
import Greet from '../components/education/greet.component'
import LargeBackground from '../components/education/largeBackground.component'

// Sections
import Seminar from '../sections/education/seminars.section'
import KeyFeatures from '../sections/education/keyfeature.section'
import Invitation from '../sections/education/invitation.section'
import NextLevel from '../sections/education/nextLevel.section'
import Agenda from '../sections/education/agenda.section'

const Education: NextPage = () => {
  return (
    <div className='overflow-x-hidden text-white'>
      <Head>
        <title>Centauri Education</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='relative'>
        {/* Large Background */}
        <LargeBackground />

        {/* greet on education view */}
        <Greet />

        <div className='flex flex-col justify-center items-center gap-32 text-white mx-auto my-16 sm:px-10 text-left md:text-justify'>
          {/* Seminars section */}
          <Seminar />
          {/* Key features */}
          <KeyFeatures />

          {/* Join the revolution */}
          <Invitation />
          {/* The Next level section */}
          <NextLevel />

          {/* The Agenda */}
          <Agenda />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Education