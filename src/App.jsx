import Info from './Input.jsx';
import Cv from './Cv.jsx';
import './index.css';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({});

  function handleChange(id, newValue) {
    console.log(id, newValue)
    setValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  }

  return (
    <div className='main'>
      <Info handleChange={handleChange} />
      <Cv values={values} />
    </div>
  );
}

export default App;
