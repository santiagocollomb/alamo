import React from 'react'
import './style.styl'
import EmailIcons from '../EmailIcons/index'

export default function ContactIcons() {
  return (
    <div
      className="contact-info"
      data-sal="slide-up"
      data-sal-easing="ease"
    >
      <EmailIcons direction="row" />

    </div>
  )
}