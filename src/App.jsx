import Info from './Input.jsx';
import { Education, Experience, Skills, Languages } from './Input.jsx';
import Cv from './Cv.jsx';
import './index.css';
import { useState } from 'react';

function App() {
  // general
  const [values, setValues] = useState({});
  // skills
  const [skills, setSkills] = useState([]);
  const [skillValue, setSkillValue] = useState('');
  // languages
  const [languages, setLanguages] = useState([]);
  const [langValue, setLangValue] = useState('');
  // education
  const [educations, setEducations] = useState([]);
  const [formData, setFormData] = useState({});
  // experience
  const [experiences, setExperiences] = useState([]);
  const [expData, setExpData] = useState({});

  function handleExpForm(id, value) {
    setExpData((prevExpData) => ({
      ...prevExpData,
      [id]: value,
    }));
  }

  function handleAddExp(exp) {
    if (exp) {
      setExperiences((prevExp) => [...prevExp, exp]);
    }
  }

  function handleEducationForm(id, value) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  }

  function handleAddEducation(education) {
    if (education) {
      setEducations((prevEducations) => [...prevEducations, education]);
    }
  }

  function handleChange(id, newValue) {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  }

  function handleAddSkill(skill) {
    if (skill) {
      // Add to skills list
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkillValue(''); // Clear the input field
    }
  }

  function handleAddLang(lang) {
    if (lang) {
      // Add to slang list
      setLanguages((prevLanguages) => [...prevLanguages, lang]);
      setLangValue(''); // Clear the input field
    }
  }

  return (
    <div className="main">
      <div className="info">
        <Info handleChange={handleChange} />
        <Education
          handleEducationForm={handleEducationForm}
          handleAddEducation={handleAddEducation}
          formData={formData}
        />
        <Experience
          handleExpForm={handleExpForm}
          handleAddExp={handleAddExp}
          expData={expData}
        />
        <Skills
          handleAddSkill={handleAddSkill}
          skillValue={skillValue}
          setSkillValue={setSkillValue}
        />
        <Languages
          handleAddLang={handleAddLang}
          langValue={langValue}
          setLangValue={setLangValue}
        />
      </div>
      <Cv
        values={values}
        skills={skills}
        languages={languages}
        educations={educations}
        experiences={experiences}
      />
    </div>
  );
}

export default App;
