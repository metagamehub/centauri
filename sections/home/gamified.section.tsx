import { useEffect, useState } from "react"

const Circle = ({ label }: { label: string }) => {
  return <div className="w-[221px] h-[221px] flex justify-center items-center text-center font-bold text-3xl rounded-full bg-white bg-opacity-5 border-t-2 border-l-2 border-white border-opacity-20">{label}</div>
}

const Rectangle = ({ label }: { label: string }) => {
  return (
    <div className="w-full h-[221px] flex justify-center items-center">
      <div className="w-full h-fit flex justify-center items-center text-center font-bold text-3xl rounded-xl bg-white bg-opacity-5 border-t-2 border-l-2 border-white border-opacity-20 p-5">{label}</div>
    </div>
  )
}

const Arrow = ({ direction, fullHeigh }: {
  direction: 'right' | 'left' | 'bottom' | 'top',
  fullHeigh: boolean
}) => {
  const [rotateGrades, setRotateGrades] = useState<'rotate-0' | 'rotate-90' | 'rotate-180' | '-rotate-90'>('rotate-0')

  useEffect(() => {
    switch (direction) {
      case "left":
        setRotateGrades('rotate-180')
        break;
      case "bottom":
        setRotateGrades('rotate-90')
        break;
      case "top":
        setRotateGrades('-rotate-90')
        break;
      default:
        setRotateGrades('rotate-0')
        break;
    }
  }, [])

  return (
    <div className={`relative w-fit ${fullHeigh ? 'h-[221px]' : 'h-[10px]'} flex justify-center items-center px-5 origin-center ${rotateGrades}`}>
      <div className="w-8 border-2" />
      <div className="absolute origin-center rotate-45 border-t-[3px] border-r-[3px] w-4 h-4 right-5" />
    </div>
  )
}

const Gamified = () => {
  return (
    <div className='flex flex-col w-full gap-20 bg-blured px-10 py-32 rounded-xl'>
      <h2 className="text-center text-[80px] font-light">OUR WEB3 USP: A GAMIFIED DAO</h2>
      <div className="text-center flex w-full justify-around text-2xl text-[#627BFF]">
        <p className="max-w-lg">votes, contributes and upgrades membership with loyalty modules</p>
        <p className="max-w-lg">knowledge and standars to work with as well as partners and ressources to execute</p>
      </div>

      {/* Horizontal Graph */}
      <div className="w-full flex justify-center">
        <Circle label="Individual/ Planet" />
        <Arrow direction="right" fullHeigh />
        <Circle label="Avatar membership" />
        <Arrow direction="right" fullHeigh />
        <div className="flex flex-col justify-center items-center">
          <Rectangle label="The Metanode Token Gated Platform" />
          <Arrow direction="bottom" fullHeigh={false} />
          <div className="w-full flex gap-2">
            <Rectangle label="Educating" />
            <Rectangle label="Standardizing" />
            <Rectangle label="Enabling" />
          </div>
        </div>
        <Arrow direction="right" fullHeigh />
        <Circle label="Individual/ Planet" />
      </div>
    </div>
  )
}

export default Gamified