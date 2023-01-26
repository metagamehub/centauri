interface ButtonProps {
  label: string
  handleClick: Function
}

const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={() => handleClick()}
      className='bg-[#627BFF] py-6 rounded-full font-medium text-2xl px-10'
    >{label}</button>
  )
}

export default Button