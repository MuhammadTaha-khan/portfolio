import React from 'react';
import SkillBar from './SkillBar';
import CircularProgress from './ProfectionSkill';
import './component/Skill.css'

const SkillChart = () => {
  const technicalSkills = [
    { logo: <i className='bx bxl-html5' style={{ color: '#e34c26', fontSize: '2em' }}></i>, skill: 'HTML', level: 90 },
    { logo: <i className='bx bxl-css3' style={{ color: '#2965f1', fontSize: '2em' }}></i>, skill: 'CSS', level: 80 },
    { logo: <i className='bx bxl-bootstrap' style={{ color: '#563d7c', fontSize: '2em' }}></i>, skill: 'BOOTSTRAP', level: 85 },
    { logo: <i className='bx bxl-tailwind-css' style={{ color: '#38bdf8', fontSize: '2em' }}></i>, skill: 'TAILWIND', level: 80 },
    { logo: <i className='bx bxl-javascript' style={{ color: '#f7df1e', fontSize: '2em' }}></i>, skill: 'JAVASCRIPT', level: 70 },
    { logo: <i className='bx bxl-react' style={{ color: '#61dafb', fontSize: '2em' }}></i>, skill: 'REACT JS', level: 85 },
  ];

  const professionalSkills = [
    { skill: 'Creativity', level: 85 },
    { skill: 'Communication', level: 90 },
    { skill: 'Problem Solving', level: 70 },
    { skill: 'Teamwork', level: 90 },
  ];

  return (
    <div className='main-SkillChart'>
    <div className="container main-SkillChart ">
      <div className="row SkillChart">
        <div className="col-md-6">
          <div className="col-md-10">
            <h1 className="text-center heading ">Technical Skills</h1>
            {technicalSkills.map((item, index) => (
              <SkillBar key={index} skill={item.skill} level={item.level} logo={item.logo} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="text-center heading ">Professional Skills</h1>
          {/* display-flex flex-wrap justify-content-around */}
          <div className="ProfessionSkill ">
            {professionalSkills.map((item, index) => (
              <CircularProgress key={index} skill={item.skill} level={item.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkillChart;
