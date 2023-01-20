import Button from "../../components/button.component"

const AgendaCard = ({ index, item }: { index: number, item: string }) => {
  return (
    <div className="w-96 h-64 bg-blured text-3xl font-medium flex items-center justify-center">
      {`${index}. ${item}`}
    </div>
  )
}

const Agenda = () => {
  const AgendaSchedule = [
    'Introduction to the Metaverse and MGH',
    'The Impact of the Metaverse on E-Sports',
    'Use Case: The Metaverse in Esports Tournaments',
    'E-Sport Future Immersion',
    'Conclusion',
    'Q & A'
  ]

  return (
    <div className='relative flex flex-wrap justify-center items-center gap-20 text-center'>
      <h2 className="w-full text-6xl sm:text-[118px] font-bold">THE AGENDA</h2>
      {AgendaSchedule.map((item, index) => <AgendaCard key={index} index={index + 1} item={item} />)}
      <div className="flex justify-center items-center w-full">
        <Button label="APPLY!" handleClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSdJC5ogboIQN5guxFH9UxqcEuoOe4vpBZR_gI1HNpbRrCuqMg/viewform', '_blank') }} />
      </div>
    </div>
  )
}

export default Agenda