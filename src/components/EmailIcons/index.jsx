import React from 'react'
import './style.styl'
import Email from '../../assets/icons/mail.svg'
import Phone from "../../assets/icons/phone.svg"

export default function EmailIcons(props) {
  return (
    <div
      className={`email-icons ${props.isWhite && "color-white"}`}
      style={{ flexDirection: props.direction }}
    >
      <div className="icon">
        <a
          href="mailto:info@alamoingenieria.com.a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
          <span>info@alamoingenieria.com.ar</span>
        </a>
      </div>
      <div className="icon">
        <a
          href={
            props.lagn === "es"
              ? "https://wa.link/eqn7rn"
              : "https://wa.link/n38ia6"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone />
          <span>+549 298-4692-132</span>
        </a>
      </div>
    </div>
  )
}