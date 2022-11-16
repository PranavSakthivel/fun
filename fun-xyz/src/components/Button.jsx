/*
The Button component will take in button text, optional styles and an optional link
It also applies default font and text styles to fit with the website theme.
*/

import React from 'react'

const Button = ({ text, styles, link }) => {
  return (
    <a href={link} target='_blank'>
      <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] rounded-full ${styles}`}>
        {text}
      </button>
    </a>
  )
}

export default Button