const Greet = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Corners */}
      <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white' />
      <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white' />
      <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white' />
      <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white' />

    </div>
  )
}

export default Greet