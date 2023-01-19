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
    <div className='flex flex-col lg:flex-row backdrop-blur-none'>
      <h2 className='font-bold text-[5.25rem] max-w-2xl'>CURRENT CHALLENGES CENTAURI IS ADDRESSING</h2>
      <ul className='flex flex-col text-2xl list-disc justify-around'>
        {challengesList.map((challenge, index) => <li key={index}>{challenge}</li>)}
      </ul>
    </div>
  )
}

export default CurrentChallenges