import Info from './Input.jsx';
import Cv from './Cv.jsx';
import './index.css';
import { useState } from 'react';

function App() {
  // general details
  const [values, setValues] = useState({});
  // skills
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
      setInputValue(''); // Clear the input field
    }
  }

  return (
    <div className="main">
      <Info
        handleChange={handleChange}
        handleAddSkill={handleAddSkill}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Cv values={values} skills={skills} />
    </div>
  );
}

export default App;
