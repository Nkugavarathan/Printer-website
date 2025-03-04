import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css" // Ensure custom styles are included

export default function ContactComponent() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Side: Content */}
        <Col md={6} className="mb-4 mb-md-0">
          <h2>Get in Touch</h2>
          <p className="lead">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello, feel free to reach out.
          </p>
          <div className="mt-4">
            <h4>Contact Information</h4>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Main St, City, Country
            </p>
          </div>
        </Col>

        {/* Right Side: Form */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
