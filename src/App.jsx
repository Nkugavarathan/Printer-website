import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import "./style.css"
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}
