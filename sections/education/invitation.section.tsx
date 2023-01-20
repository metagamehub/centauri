import React from "react"

const CircleCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="rounded-full w-[395px] h-[395px] border border-white flex flex-col justify-center items-center text-center">
      <h2 className="font-bold text-6xl">{title}</h2>
      {children}
    </div>
  )
}

const Invitation = () => {
  return (
    <div className='relative flex flex-col xl:flex-row justify-around items-center gap-20'>
      <div className="xl:w-2/3 flex flex-col justify-center xl:items-end text-center xl:text-right">
        <h2 className='text-5xl sm:text-6xl lg:text-8xl 2xl:text-[115px] font-bold leading-none'>JOIN THE REVOLUTION,</h2>
        <p className="text-2xl sm:text-4xl 2xl:text-5xl my-8">Attend our seminars and transform the future.</p>
        <p className="text-base sm:text-xl 2xl:text-2xl font-light">Don't miss this exclusive opportunity to master the metaverse! Register now on our website and follow us on social media (link to twitter, linkedin, discord) for the latest updates on upcoming seminar dates, topics, and keynote speakers.</p>
      </div>
      <div className='xl:w-1/3 flex flex-col justify-center items-start gap-10 scale-75 sm:scale-100'>
        <CircleCard title="WHEN?">
          <div className="my-3 text-2xl">
            <h3 className="font-bold">Date:</h3>
            <p className="font-normal">2nd of Feb, 2023?</p>
          </div>
          <div className="text-2xl">
            <h3 className="font-bold">Time:</h3>
            <p className="font-normal">5:00 - 6:30 pm CET/</p>
            <p className="font-normal">11:00 am - 12:30 pm</p>
          </div>
        </CircleCard>
        <CircleCard title="WHERE?">
          <div className="h-32"></div>
        </CircleCard>
      </div>
    </div>
  )
}

export default Invitation