import React from "react"
import NavbarContainer from "./components/NavbarContainer"
// import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function App() {
  return (
    <>
      <NavbarContainer />
      {/* <Hero /> */}
      <Projects />
      <Footer />
    </>
  )
}
