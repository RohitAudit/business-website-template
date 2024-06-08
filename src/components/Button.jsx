import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' onClick={()=>window.open("https://calendly.com/mnkrj500")} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Schedule a call
    </button>
  )
}

export default Button
