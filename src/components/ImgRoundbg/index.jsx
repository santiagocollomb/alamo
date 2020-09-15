import React from 'react'
import './style.styl'

export default function ImgRoundbg(props) {
  return (
    <div className="round-bg">
      {props.children}
    </div>
  )
}