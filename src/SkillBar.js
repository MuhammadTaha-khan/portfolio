import React from 'react';
import PropTypes from 'prop-types';
// import './component/Skill.css'; // We'll define custom CSS here

const SkillBar = ({ logo,skill, level }) => {
  return (
    <div className="skill-bar my-5">
      <div className="d-flex justify-content-between">
        <span className="d-flex  align-items-center">
            <span>{logo}</span>
            <span>{skill}</span>
        </span>
            <span>{level}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillBar;




