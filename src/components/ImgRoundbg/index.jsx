import React from 'react'
import './style.styl'

export default function ImgRoundbg(props) {
  return (
    <div
      className="round-bkg"
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      {props.children}
    </div>
  )
}