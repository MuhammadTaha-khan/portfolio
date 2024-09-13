import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Mesg.css'
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import Swal from 'sweetalert2'

function Msg() {
     // Step 1: Initialize state for form values
     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    // Step 2: Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Step 3: Handle form submission
    const onSubmit = async (event) => {
        event.preventDefault();
                // Check if all fields are filled
                if (
                    formData.firstName &&
                    formData.lastName &&
                    formData.email &&
                    formData.phoneNumber &&
                    formData.message
                )
                 {
                    // Prepare form data for submission
        const formData = new FormData(event.target);

        formData.append("access_key", "ba5b6bf0-b3b6-4d69-98d5-4165e562a5aa");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "success!",
                text: "Message Send Seccessfully",
                icon: "success"
            });
                            // Reset form
                            setFormData({
                                firstName: '',
                                lastName: '',
                                email: '',
                                phoneNumber: '',
                                message: ''
                            });
                        }
                    } else {
                        // Show error if fields are missing
                        Swal.fire({
                            title: "Error!",
                            text: "Please fill in all the fields.",
                            icon: "error"
                        });
                    }
                
        };


    return (
        <div className="msg-section">
                <h1 className='msg-heading'>CONTACT US</h1>
            <Container >
                <Row className="mesg mb-4">
                    <Col md={5} className="testimonial-card text-start">
                        {/* <Col className='testimonial-card-head '>
                        </Col> */}
                        <p>TRVEL THE SILK ROAD TOWARDS</p>
                        <h4>Transforming Your  Growth Through Digitalization</h4>
                        <h6 className='pt-4 pb-3'>Follow Us On:</h6>
                        <Col style={{ display: 'flex', flexDirection: 'row', fontSize: 'large', marginBottom:'20px' }}>
                            <a href="https://www.facebook.com/profile.php?id=100071913467957" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: '#00ffee' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-taha-207545313/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: '#00ffee' }} />
                            </a>
                            <a href="https://www.instagram.com/muhammadtahakhan71" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: '#00ffee' }} />
                            </a>
                            <a href="https://wa.me/92266835065" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: '#00ffee' }} />
                            </a>
                            <a href="https://github.com/Taha-dev-ai" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ marginRight: '15px', fontSize: '1.8rem', color: '#00ffee', cursor:'pointer' }} />
                            </a>
                        </Col>
                    </Col>
                    <Col md={6} xs={11} className="msg-card-right ">
                        <h2>Get In Touch With Us</h2>
                        <div>
                            <form className="form" onSubmit={onSubmit}>
                                <p className="message">Free contact now and get full access to our app. </p>
                                <label>
                                    <input                                         className="input field"
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required 
                                        />
                                    {/* <span>Firstname</span> */}
                                </label>

                                <label>
                                <input
                                        className="input field"
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {/* <span>Company Name</span> */}
                                </label>

                                <label>
                                <input
                                        className="input field"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {/* <span>Email</span> */}
                                </label>

                                <label>
                                <input
                                        className="input field"
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    {/* <span>Phone Number</span> */}
                                </label>
                                <label>
                                <textarea
                                        className="input field"
                                        placeholder="Your Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                    />
                                    {/* <span>Your Message</span> */}
                                </label>
                                {/* <button className="submit">Submit</button> */}
                                <button class="con-button" type="submit" >Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Msg
