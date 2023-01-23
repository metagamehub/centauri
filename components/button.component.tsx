interface ButtonProps {
  label: string
  handleClick: Function
}

const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={() => handleClick()}
      className='bg-[#627BFF] p-9 rounded-full font-medium text-2xl px-20'
    >{label}</button>
  )
}

export default Button