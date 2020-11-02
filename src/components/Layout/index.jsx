import React from "react"
import Navbar from "../Navbar/index"
import Footer from "../Footer/index"

import "./style.styl"

export default function Layout(props) {
  return (
    <>
      <Navbar lang={props.lang} />
      <main>
        
        {props.children}
      </main>
      <Footer />
    </>
  )
}