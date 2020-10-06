import React from "react"
import './style.styl'
import Navbar from "../Navbar/index"
import Footer from "../Footer/index"

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main>
        
        {props.children}
      </main>
      <Footer />
    </>
  )
}