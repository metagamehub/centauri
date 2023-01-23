import { useEffect, useState } from "react"

const Circle = ({ label }: { label: string }) => {
  return <div className="w-[221px] h-[221px] flex justify-center items-center text-center font-bold text-3xl rounded-full bg-white bg-opacity-10 gm-border">{label}</div>
}

const Rectangle = ({ label, hfull }: { label: string, hfull?: boolean }) => {
  return (
    <div className={`w-full ${hfull ? 'h-[221px]' : ''} xl:h-[221px] flex justify-center items-center`}>
      <div className="w-full h-full xl:h-fit flex justify-center items-center text-center font-bold text-3xl rounded-xl bg-white bg-opacity-10 gm-border p-5">{label}</div>
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
    <div className={`relative w-full xl:w-fit ${fullHeigh ? 'h-[221px]' : 'h-[50px]'} flex justify-center items-center px-5 origin-center ${rotateGrades}`}>
      <div className="relative w-8 border-2">
        <div className="absolute origin-center rotate-45 border-t-[3px] border-r-[3px] w-4 h-4 right-0 -top-2" />
      </div>
    </div>
  )
}

const Gamified = () => {
  return (
    <div className='flex flex-col w-full gap-20 px-10 py-32 rounded-xl gm-soft gm-border'>
      <h2 className="text-center text-6xl sm:text-[80px] font-light">OUR WEB3 USP: A GAMIFIED DAO</h2>
      <div className="text-center font-bold flex flex-col md:flex-row w-full items-center justify-around text-2xl text-[#627BFF] gap-5">
        <p className="max-w-lg">votes, contributes and upgrades membership with loyalty modules</p>
        <p className="max-w-lg">knowledge and standars to work with as well as partners and ressources to execute</p>
      </div>

      {/* Horizontal Graph */}
      <div className="w-full flex flex-col xl:flex-row justify-center scale-75 sm:scale-100 xl:items-start xl:scale-75 2xl:scale-95">
        {/* Initial 2 circles */}
        <div className="flex flex-col xl:flex-row">
          <Circle label="Individual/ Planet" />
          <div className="hidden xl:block"><Arrow direction="right" fullHeigh /></div>
          <div className="block xl:hidden w-[221px]"><Arrow direction="bottom" fullHeigh={false} /></div>
          <Circle label="Avatar membership" />
          <div className="hidden xl:block"><Arrow direction="right" fullHeigh /></div>
          <div className="block xl:hidden w-[221px]"><Arrow direction="bottom" fullHeigh={false} /></div>
        </div>

        {/* Rectangles */}
        <div className="flex xl:flex-col justify-center items-center">
          <Rectangle label="The Metanode Token Gated Platform" hfull />
          <div className="hidden xl:block"><Arrow direction="bottom" fullHeigh={false} /></div>
          <div className="block xl:hidden"><Arrow direction="right" fullHeigh /></div>
          <div className="w-full flex flex-col xl:flex-row gap-2">
            <Rectangle label="Educating" />
            <Rectangle label="Standardizing" />
            <Rectangle label="Enabling" />
          </div>
        </div>
        <div className="hidden xl:block"><Arrow direction="right" fullHeigh /></div>
        <div className="block xl:hidden w-[221px]"><Arrow direction="bottom" fullHeigh={false} /></div>
        <div className="flex flex-col xl:flex-row">
          <Circle label="Individual/ Planet" />
        </div>
      </div>
    </div>
  )
}

export default Gamified