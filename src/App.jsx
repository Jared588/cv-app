import Info from './Input.jsx';
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
  // references
  
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
      <Info
        handleChange={handleChange}
        handleAddSkill={handleAddSkill}
        skillValue={skillValue}
        setSkillValue={setSkillValue}
        handleAddLang={handleAddLang}
        langValue={langValue}
        setLangValue={setLangValue}
      />
      <Cv values={values} skills={skills} languages={languages}/>
    </div>
  );
}

export default App;
