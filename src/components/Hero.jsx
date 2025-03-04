// import React from "react"
// import { Typewriter } from "react-simple-typewriter"
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import "bootstrap/dist/css/bootstrap.min.css"
// // Import Bootstrap CSS

// export default function Hero() {
//   const particlesInit = async (main) => {
//     await loadFull(main)
//   }

//   return (
//     <>
//       {" "}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: {
//             color: {
//               value: "#f8f9fa",
//             },
//           },
//           fpsLimit: 60,
//           particles: {
//             color: {
//               value: "#3498db",
//             },
//             links: {
//               color: "#3498db",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outMode: "bounce",
//               random: false,
//               speed: 3,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               random: true,
//               value: 5,
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//       <div className="container-fluid d-flex justify-content-center align-items-center vh-100 hero-section">
//         <div className="hero-container">
//           <section id="hero" className="hero  text-center">
//             <h1>Welcome to My Portfolio</h1>
//             <h2>
//               I'm a{" "}
//               <span>
//                 <Typewriter
//                   words={[
//                     "Video Editor",
//                     "Creative Designer",
//                     "Motion Graphics Artist",
//                   ]}
//                   loop={true}
//                   cursor
//                 />
//               </span>
//             </h2>
//           </section>
//         </div>
//       </div>
//     </>
//   )
// }

import React from "react"
import { Typewriter } from "react-simple-typewriter"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap CSS
import "../style.css" // Ensure your custom styles are imported

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#f8f9fa",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#3498db",
            },
            links: {
              color: "#3498db",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <section id="hero" className="hero text-center">
        <h1>Welcome to My Portfolio</h1>
        <h2>
          I'm a{" "}
          <span>
            <Typewriter
              words={[
                "Video Editor",
                "Creative Designer",
                "Motion Graphics Artist",
              ]}
              loop={true}
              cursor
            />
          </span>
        </h2>
      </section>
    </div>
  )
}
