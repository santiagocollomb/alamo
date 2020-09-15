import React from 'react'
import './style.styl'
import EmailIcons from '../EmailIcons/index'

import Face from "../../assets/icons/facebook.svg"
import Insta from "../../assets/icons/instagram.svg"

export default function ContactIcons() {
  return (
    <div className="contact-info">

      <EmailIcons direction="row"/>
      <div className="social-icons">
        <div className="icon">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Face />
          </a>
        </div>
        <div className="icon mt-2">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Insta />
          </a>
        </div>
      </div>
    </div>
  )
}