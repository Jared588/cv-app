import React from 'react';
import ReactDOM from 'react-dom/client';
import { GeneralInfo, EducationInfo, ExperienceInfo } from './Input.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfo />
    <EducationInfo />
    <ExperienceInfo />
  </React.StrictMode>,
);
