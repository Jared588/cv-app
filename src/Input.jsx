import { useState } from 'react';
import InputContainer from './containers/InputContainer';
import PropTypes from 'prop-types';
import './input.css';

export default function Info({ handleChange, values }) {
    const [isContainerVisible, setContainerVisibility] = useState(false);
    const toggleContainerVisibility = () => {
        setContainerVisibility(!isContainerVisible)
    }
    return  (
        <>
            <button className='input-heading' onClick={toggleContainerVisibility}>Personal Details</button>
            {isContainerVisible && (
                <div className="infoContainer" id='personal'>
                    <InputContainer title='Full Name' id='fullName' type="text" value={values.fullName || ''} onChange={handleChange}/>
                    <InputContainer title='Job Title* (optional)' id='title' type="text" value={values.title || ''} onChange={handleChange}/>
                    <InputContainer title='Email' id='email' type="email" value={values.email || ''} onChange={handleChange}/>
                    <InputContainer title='Phone Number' id='phoneNumber' value={values.phoneNumber || ''} type="tel" onChange={handleChange}/>
                    <InputContainer title='Address' id='address' type="text" value={values.address || ''} onChange={handleChange}/>
                    <div className="inputContainer">
                        <label htmlFor="aboutme">About me</label>
                        <textarea name="aboutme" id="aboutme" cols="30" rows="5" className='textarea' value={values.aboutme || ''} onChange={(e) => handleChange('aboutme', e.target.value)}></textarea>
                    </div>
                </div>
            )}
        </>
    )
}

export function Education({ handleEducationForm, handleAddEducation, formData, educations, setEducations }) {
    const [isContainerVisible, setContainerVisibility] = useState(false);
    const toggleContainerVisibility = () => {
        setContainerVisibility(!isContainerVisible)
    }
    const removeEducationItem = (index) => {
        // Create a new array without the removed item
        const updatedEducations = [...educations.slice(0, index), ...educations.slice(index + 1)];
        
        // Update state with the new array
        setEducations(updatedEducations);
    };
    return ( 
        <>
            <button className='input-heading' onClick={toggleContainerVisibility}>Education</button>
            {isContainerVisible && (
                <div className="infoContainer" id='education'>
                    <InputContainer title='School' id='school' type="text" value={formData.school || ''} onChange={handleEducationForm}/>
                    <InputContainer title='Degree' id='degree' type="text" value={formData.degree || ''} onChange={handleEducationForm}/>
                    <div className='dateContainer'>
                        <InputContainer title='Start Date' id='eduStartDate' type="date" value={formData.eduStartDate || ''} onChange={handleEducationForm}/>
                        <InputContainer title='End Date' id='eduEndDate' type="date" value={formData.eduEndDate || ''} onChange={handleEducationForm}/>
                    </div>
                    <button className='addBtn' id='eduBtn' onClick={() => handleAddEducation(formData)}>Add +</button>
                    {educations.map((education, index) => (
                        <li className='list-item' key={index}>
                            {education.school} - {education.degree}
                            <button onClick={() => removeEducationItem(index)}>x</button>
                        </li>
                    ))} 
                </div>
            )}
        </>
    )
}

export function Experience({ handleExpForm, handleAddExp, expData, experiences, setExperiences }) {
    const [isContainerVisible, setContainerVisibility] = useState(false);
    const toggleContainerVisibility = () => {
        setContainerVisibility(!isContainerVisible)
    }
    const removeExpItem = (index) => {
        // Create a new array without the removed item
        const updatedExperiences = [...experiences.slice(0, index), ...experiences.slice(index + 1)];
        
        // Update state with the new array
        setExperiences(updatedExperiences);
    };
    return (
        <>
            <button className='input-heading' onClick={toggleContainerVisibility}>Experience</button>
            {isContainerVisible && (
                <div className="infoContainer" id='experience'>
                    <InputContainer title='Company Name' id='company' type="text" value={expData.company || ''} onChange={handleExpForm}/>
                    <InputContainer title='Position Title' id='position' type="text" value={expData.position || ''} onChange={handleExpForm}/>
                    <div className='dateContainer'>
                        <InputContainer title='Start Date' id='expStartDate' type="date" value={expData.expStartDate || ''} onChange={handleExpForm}/>
                        <InputContainer title='End Date' id='expEndDate' type="date" value={expData.expEndDate || ''} onChange={handleExpForm}/>
                    </div>
                    <InputContainer title='Location' id='compLocation' type="text" value={expData.compLocation || ''} onChange={handleExpForm}/>
                    <div className="inputContainer">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5" className='textarea' value={expData.description || ''} onChange={(e) => handleExpForm('description', e.target.value)}></textarea>
                    </div>
                    <button className='addBtn' id='expBtn' onClick={() => handleAddExp(expData)}>Add +</button>
                    {experiences.map((experience, index) => (
                        <li className='list-item' key={index}>
                            {experience.company} - {experience.position}
                            <button onClick={() => removeExpItem(index)}>x</button>
                        </li>
                    ))} 
                </div>
            )}
        </>
    )
}

export function Skills({ handleAddSkill, skillValue, setSkillValue, skills, setSkills }) {
    const [isContainerVisible, setContainerVisibility] = useState(false);
    const toggleContainerVisibility = () => {
        setContainerVisibility(!isContainerVisible)
    }
    const removeSkill = (index) => {
        // Create a new array without the removed item
        const updatedSkills = [...skills.slice(0, index), ...skills.slice(index + 1)];
        
        // Update state with the new array
        setSkills(updatedSkills);
    };
    return (
        <>
            <button className='input-heading' onClick={toggleContainerVisibility}>Skills</button>
            {isContainerVisible && (
                <div className='infoContainer'>
                    <input type="text" id='skill' value={skillValue} onChange={(e) => setSkillValue(e.target.value)}/>
                    <button className='addBtn' id='skillBtn' onClick={() => handleAddSkill(skillValue)}>Add +</button>
                    {skills.map((skill, index) => (
                        <li className='list-item' key={index}>
                            {skill}
                            <button onClick={() => removeSkill(index)}>x</button>
                        </li>
                    ))} 
                </div>
            )}
        </>
    )
}

export function Languages({ handleAddLang, langValue, setLangValue, languages, setLanguages }) {
    const [isContainerVisible, setContainerVisibility] = useState(false);
    const toggleContainerVisibility = () => {
        setContainerVisibility(!isContainerVisible)
    }
    const removeLang = (index) => {
        // Create a new array without the removed item
        const updatedLanguages = [...languages.slice(0, index), ...languages.slice(index + 1)];
        
        // Update state with the new array
        setLanguages(updatedLanguages);
    };
    return (
        <>
            <button className='input-heading' onClick={toggleContainerVisibility}>Languages</button>
            {isContainerVisible && (
                <div className='infoContainer'>
                    <input type="text" id='language' value={langValue} onChange={(e) => setLangValue(e.target.value)}/>
                    <button className='addBtn' id='langBtn' onClick={() => handleAddLang(langValue)}>Add +</button>
                    {languages.map((language, index) => (
                        <li className='list-item' key={index}>
                            {language}
                            <button onClick={() => removeLang(index)}>x</button>
                        </li>
                    ))} 
                </div>
            )}
        </>
    )
}

Info.propTypes = {
    handleChange: PropTypes.func,
    values: PropTypes.object
};

Education.propTypes = {
    handleEducationForm: PropTypes.func,
    handleAddEducation: PropTypes.func,
    formData: PropTypes.objectOf(PropTypes.string),
    educations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    setEducations: PropTypes.func
}

Experience.propTypes = {
    handleExpForm: PropTypes.func,
    handleAddExp: PropTypes.func,
    expData: PropTypes.objectOf(PropTypes.string),
    experiences: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    setExperiences: PropTypes.func
}

Skills.propTypes = {
    handleAddSkill: PropTypes.func,
    skillValue: PropTypes.string,
    setSkillValue: PropTypes.func,
    skills: PropTypes.arrayOf(PropTypes.string),
    setSkills: PropTypes.func
}

Languages.propTypes = {
    handleAddLang: PropTypes.func,
    langValue: PropTypes.string,
    setLangValue: PropTypes.func,
    languages: PropTypes.arrayOf(PropTypes.string),
    setLanguages: PropTypes.func
}
