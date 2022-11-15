import React from 'react'

const Button = ({ text, styles, link }) => {
  return (
    <a href={link} target='_blank'>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-full ${styles}`}>
        { text }
      </button>
    </a>
  )
}

export default Button