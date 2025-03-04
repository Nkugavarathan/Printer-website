// import React, { useState } from "react"
// // import "../styles.css"

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="navbar">
//       <div className="logo">Portfolio</div>
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? "✖" : "☰"}
//       </div>
//       <ul className={menuOpen ? "nav-links open" : "nav-links"}>
//         <li>
//           <a href="#hero">Home</a>
//         </li>
//         <li>
//           <a href="#projects">Projects</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   )
// }
import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../style.css" // Make sure to import your custom styles

function NavbarContainer() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar expand="lg" className="bg-light" fixed="top">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="text-secondary">
            MyPortfolio
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-justified">
              <Nav.Link href="#home" className="text-secondary">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-secondary">
                About
              </Nav.Link>
              <Nav.Link href="#project" className="text-secondary">
                Project
              </Nav.Link>
              <Nav.Link href="#contact" className="text-secondary">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarContainer
