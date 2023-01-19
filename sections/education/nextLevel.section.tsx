const NextLevel = () => {
  const objetivesList = [
    'To provide an overview of the metaverse and its potential in esports',
    'To examine the impact of the metaverse on esports tournaments and events',
    'To discuss the use of the metaverse in an esports tournament as a case study',
    'To analyze the potential for the metaverse to become a staple in esports and beyond',
    'To consider the challenges and limitations of the metaverse in esports.'
  ]

  return (
    <div className='flex justify-center bg-blured p-20 gap-20'>
      <div className="w-1/2">
        <h2 className="font-bold text-[118px] leading-none mb-10">THE NEXT<br />LEVEL,</h2>
        <p className="font-normal text-5xl">Of Immersion<br />and interactivity </p>
      </div>
      <div className="w-1/2 text-2xl">
        <p className="font-light">{'In recent years, the esports business has grown significantly. Newzoo estimates that the value of the global esports market increased by 22% in 2022 to little over $1.38 billion USD. According to experts, it might increase to 1.86 billion US dollars in 2025. Additionally, throughout the past few years, metaverse has made news. What, though, does the future hold for the two together?'}<br />{'Aim: The aim of the seminar is to explore the impact of the metaverse on the esports industry, including its potential to enhance immersion and interactivity, monetization opportunities, and future growth.'}
        </p>
        <h3 className="font-medium my-10">Objectives:</h3>
        <ul className="font-light list-disc list-outside pl-5">
          {objetivesList.map((objetive, index) => <li key={index}>{objetive}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default NextLevel