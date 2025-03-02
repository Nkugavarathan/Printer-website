import React from "react"
import Navbar from "./components/Navbar"
import { AnimatedBackground } from "animated-backgrounds"
import Header from "./components/Header"
export default function App() {
  return (
    <div>
      <AnimatedBackground animationName="quantumField" blendMode="screen" />
      {/* Basic usage */}

      <Navbar />
      <Header />
    </div>
  )
}
