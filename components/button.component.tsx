interface ButtonProps {
  label: string
  handleClick: Function
}

const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <div
      onClick={() => handleClick()}
      className='bg-[#627BFF] p-9 rounded-full font-medium text-2xl px-20'
    >{label}</div>
  )
}

export default Button