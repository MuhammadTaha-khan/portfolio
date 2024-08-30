import React from 'react'
import './component/services.css'
import { Container, Row, Col } from 'react-bootstrap';

function Services() {
  return (
    <div>
        <div className="responce-section">
            <Container fluid='lg'>
                <h1 className='mb-5 service-heading text-center'>Services</h1>
                <Row className="justify-content-center mb-4">
                    <Col xs={10} sm={5} md={4} lg={3} className="testimonial-car mb-4">
                        <h4>Custom Website Development</h4>
                        <p>I create custom websites using HTML, CSS, and JavaScript. I build responsive, user-friendly sites for personal blogs, e-commerce platforms, or corporate sites, ensuring a seamless experience across all devices.</p>                  
                    </Col>
                    <Col xs={10} sm={5} md={4} lg={3} className="testimonial-car mb-4">
                        <h4>UI/UX Design</h4>
                        <p>I create user-friendly interfaces using Bootstrap and Tailwind, emphasizing usability, accessibility, and aesthetics. My designs aim to enhance user engagement and satisfaction for successful web and app experiences.</p>          
                    </Col>
                    <Col xs={10} sm={5} md={4} lg={3} className="testimonial-car mb-4">
                        <h4>React Application Development</h4>
                        <p>
                        I specialize in React to craft dynamic, high-performance web apps—from single-page to data-driven platforms. Using React's component-based structure, I ensure scalable, efficient, and future-proof solutions tailored to your business requirements</p>             
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Services
