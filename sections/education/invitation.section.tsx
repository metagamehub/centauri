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
    <div className='relative flex justify-center items-center gap-20'>
      <div className="w-1/2">
        <h2 className='text-[115px] font-bold leading-none'>JOIN THE REVOLUTION,</h2>
        <p className="text-5xl my-8">Attend our seminars and transform the future.</p>
        <p className="text-2xl font-light">Don't miss this exclusive opportunity to master the metaverse! Register now on our website and follow us on social media (link to twitter, linkedin, discord) for the latest updates on upcoming seminar dates, topics, and keynote speakers.</p>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center gap-3'>
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