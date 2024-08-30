import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CircularProgress = ({ skill, level }) => {
  return (
    <div className="circular-progress my-4 text-center col-md-5 col-sm-5 col-xs-2"  >
      <CircularProgressbar
        value={level}
        text={`${level}%`}
        styles={buildStyles({
          textColor: '#f0f0f0',
          pathColor: '#00ffee',
          trailColor: '#1a1a1a',
        })}
      />
      <h5 className="mt-2">{skill}</h5>
    </div>
  );
};

CircularProgress.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default CircularProgress;
