import React from "react";
import "./component/education.css";

const Education = () => {
  return (
    <div className="Education ">
      <div className="container-lg ">
        <h1 className="text-center education-heading pt-5 mb-5">Education</h1>
        <div className="timeline">
          <div className="timeline-item">
            <p className="text-end year">2019</p>
            <div className="timeline-content">
              <h4>High School</h4>
              <p>
                Govt. Comprehensive School I was dedicated to my studies and
                actively participated in various extracurricular activities. I
                achieved 80% in my final exams
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="text-start year">2021</p>
            <div className="timeline-content">
              <h4>COLLEGE</h4>
              <p>
                Britain International College I was dedicated to my studies and
                actively participated in various extracurricular activities. I
                achieved 75% in my final exams
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="text-end year">2022</p>
            <div className="timeline-content">
              <h4>University</h4>
              <p>
                NFC Institute of Engineering and Technology (Multan, Punjab) - -
                BS in Computer Science, Computer Science Current CGPA: 3.02/4.00
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="text-start year">2024</p>
            <div className="timeline-content">
              <h4>At This Time</h4>
              <p>
                "Experienced Frontend Developer adept in React, HTML, CSS,
                Bootstrap,Tailwind, Javascript and React. Specializing in
                creating modern web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
