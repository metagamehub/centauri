const CurrentChallenges = () => {
  const challengesList = [
    'Siloed and biased web3 education making it hard to establish yourself as a business in a diversified manner',
    'Fragmented infrastructure and cannibalism makes it hard to create standards that foster mainstream adoption and to provide and intuitive UX',
    'Inefficient and unsustainable execution of web3 activations for businesses and lack of funding thereof',
    '→ web3 issues we are addressing',
    'Many consortiums lack community and cultureF',
    'There is an omnipresent issue with the missing web3 nativeness',
    'No call to action and limited project executions',
    '→ consortium issues we are addressing'
  ]

  return (
    <div className='flex flex-col xl:flex-row gap-20  justify-center items-center mb-40 sm:px-16'>
      <h2 className='font-bold text-center text-5xl sm:text-left sm:text-[5.25rem] max-w-2xl'>{'CURRENT CHALLENGES CENTAURI IS ADDRESSING'}</h2>
      <ul className='flex flex-col text-xl sm:text-2xl list-disc justify-around'>
        {challengesList.map((challenge, index) => <li key={index} className='font-normal'>{challenge}</li>)}
      </ul>
    </div>
  )
}

export default CurrentChallenges