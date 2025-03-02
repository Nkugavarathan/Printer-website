// import React from "react"
// import { AnimatedText } from "animated-backgrounds"
// export default function Header() {
//   return (
//     <div>
//       <AnimatedText
//         text="Custom Styled Text"
//         effect="bounce"
//         styles={{
//           fontSize: "2em",
//           fontWeight: "bold",
//           color: "#0066ff",
//         }}
//       />
//     </div>
//   )
// }

import React, { useEffect } from "react"
import { AnimatedText } from "animated-backgrounds"

export default function Header() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "finisher-header.es5.min.js"
    script.async = true
    script.onload = () => {
      new window.FinisherHeader({
        count: 6,
        size: {
          min: 1100,
          max: 1300,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0.1,
            max: 0.3,
          },
          y: {
            min: 0.1,
            max: 0.3,
          },
        },
        colors: {
          background: "#9138e5",
          particles: ["#6bd6ff", "#ffcb57", "#ff333d"],
        },
        blending: "overlay",
        opacity: {
          center: 1,
          edge: 0.1,
        },
        skew: 0,
        shapes: ["c"],
      })
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <div
        className="header finisher-header"
        style={{ width: "100%", height: "300px" }}
      >
        Logo, navigation, etc.
      </div>
      <AnimatedText
        text="Custom Styled Text"
        effect="bounce"
        styles={{
          fontSize: "2em",
          fontWeight: "bold",
          color: "#0066ff",
        }}
      />
    </div>
  )
}
