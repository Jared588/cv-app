import EducationInfo from './containers/EducationInfo';
import ExperienceInfo from './containers/ExperienceInfo';
import './Cv.css';
import PropTypes from 'prop-types';

function Cv({ values, skills, languages }) {
  // import images
  const emailIcon = <svg className="contact-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
  const phoneIcon = <svg className="contact-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
  const locationIcon = <svg className="contact-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
 
  return (
    <div className="cv-container">
      <div className="left-side">
        <img src="./src/assets/images/blank-profile.png" alt="blank profile" className='profile-img'/>
        <div className="section">
          <div id="email" className="contact-container">{emailIcon} {values.email}</div>
          <div id="phone" className="contact-container">{phoneIcon} {values.phoneNumber}</div>
          <div id="location" className="contact-container">{locationIcon} {values.address}</div>
        </div>
        <div className="section">
          <h1>Education</h1>
          <EducationInfo startDate="2023" endDate="2024" degree="Computer Science" school="Colorado State"/>
        </div>
        <div className='section'>
          <h1>Skills</h1>
          <ul className='list'>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='section'>
          <h1>Languages</h1>
          <ul className='list'>
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div className='bio'>
          <h1 className='name'>{values.fullName}</h1>
          <p className='title'>{values.title}</p>
        </div>
        <div className='about-me'>
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='experience'>
          <h3>Experience</h3>
          <ExperienceInfo startDate="2023" endDate="2024" companyName="Johnson & Jefferson" position="Web Designer" location="Colorado" description="lots of stuff... really"/>
          <ExperienceInfo startDate="2023" endDate="2024" companyName="Johnson & Jefferson" position="Web Designer" location="Colorado" description="lots of stuff... really"/>
          <ExperienceInfo startDate="2023" endDate="2024" companyName="Johnson & Jefferson" position="Web Designer" location="Colorado" description="lots of stuff... really"/>
        </div>
      </div>
    </div>
  );
}

Cv.propTypes = {
  values: PropTypes.objectOf(PropTypes.string),
  skills: PropTypes.arrayOf(PropTypes.string),
  languages: PropTypes.arrayOf(PropTypes.string)
};

export default Cv;