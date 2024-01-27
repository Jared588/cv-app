import React from 'react';
import ReactDOM from 'react-dom/client';
import { GeneralInfo, EducationInfo, ExperienceInfo } from './Input.jsx';
import App from './App.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
      <div className='info'>
        <GeneralInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
      <App />
    </div>
  </React.StrictMode>,
);
