import React from 'react'
import './component/projects.css'
import { Container, Row, Col, } from 'react-bootstrap';
import project1 from './images/project-1.png';
import project2 from './images/project-2.png';
import project3 from './images/project-3.png';

function Projects() {
    return (
        <div className="team-page">
            <Container fluid='lg'>
                <Row className="mb-4">
                    <h1 className='text-ceter mb-5 project-heading'>PROJECTS</h1>
                    <Col md={4} className="text-center">
                        <div className="team-member">
                            <img src={project1} alt="Yasir Irshad" className="img-fluid" />
                            {/* <div className="overlay">
                                <h5>Yasir Irshad</h5>
                                <p>Patron In Chief</p>
                            </div> */}
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="team-member">
                            <img src={project2} alt="Shahrukh Nazar Malik" className="img-fluid" />
                            {/* <div className="overlay">
                                <h5>Shahrukh Nazar Malik</h5>
                                <p>Co-Founder & CEO</p>
                            </div> */}
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="team-member">
                            <img src={project3} alt="Hasaan Awan" className="img-fluid" />
                            {/* <div className="overlay">
                                <h5>Hasaan Awan</h5>
                                <p>Co-Founder & CTO</p>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects
