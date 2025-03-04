import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css" // Ensure custom styles are included

export default function FooterComponent() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        {/* Main Footer Content */}
        <Row className="justify-content-center text-center text-md-start">
          {/* Left Side: Quick Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white text-decoration-none">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Middle: Copyright Notice */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <p className="mb-0">&copy; 2025. All rights reserved.</p>
          </Col>

          {/* Right Side: Follow Us */}
          <Col md={4} className="text-center text-md-start">
            <h5>Follow Us</h5>
            <p className="text-muted">
              Stay connected with us on social media for the latest updates.
            </p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
