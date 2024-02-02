import InputContainer from './containers/InputContainer';
import PropTypes from 'prop-types';
import './input.css';

export default function Info({ handleChange, handleAddSkill, skillValue, setSkillValue, handleAddLang, langValue, setLangValue, handleEducationForm, handleAddEducation, formData, handleExpForm, handleAddExp, expData }) {
    return  (
        <div className='info'>
            {/* Personal Details */}
            <div className="infoContainer">
                <h1>Personal Details</h1>
                <InputContainer title='Full Name' id='fullName' type="text" onChange={handleChange}/>
                <InputContainer title='Job Title* (optional)' id='title' type="text" onChange={handleChange}/>
                <InputContainer title='Email' id='email' type="email" onChange={handleChange}/>
                <InputContainer title='Phone Number' id='phoneNumber' type="tel" onChange={handleChange}/>
                <InputContainer title='Address' id='address' type="text" onChange={handleChange}/>
                <div className="inputContainer">
                    <label htmlFor="aboutme">About me</label>
                    <textarea name="aboutme" id="aboutme" cols="30" rows="5" className='textarea' onChange={(e) => handleChange('aboutme', e.target.value)}></textarea>
                </div>
            </div>

            {/* Education */}
            <div className="infoContainer">
                <h1>Education</h1>
                <InputContainer title='School' id='school' type="text" value={formData.school || ''} onChange={handleEducationForm}/>
                <InputContainer title='Degree' id='degree' type="text" value={formData.degree || ''} onChange={handleEducationForm}/>
                <div className='dateContainer'>
                    <InputContainer title='Start Date' id='eduStartDate' type="date" value={formData.startDate || ''} onChange={handleEducationForm}/>
                    <InputContainer title='End Date' id='eduEndDate' type="date" value={formData.endDate || ''} onChange={handleEducationForm}/>
                </div>
                <button className='addBtn' id='eduBtn' onClick={() => handleAddEducation(formData)}>Add +</button>
            </div>

            {/* Experience */}
            <div className="infoContainer">
                <h1>Experience</h1>
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
            </div>

            {/* Skills */}
            <div className='infoContainer'>
                <h1>Skills</h1>
                <input type="text" id='skill' value={skillValue} onChange={(e) => setSkillValue(e.target.value)}/>
                <button className='addBtn' id='skillBtn' onClick={() => handleAddSkill(skillValue)}>Add +</button>
            </div>

            {/* Languages */}
            <div className='infoContainer'>
                <h1>Languages</h1>
                <input type="text" id='language' value={langValue} onChange={(e) => setLangValue(e.target.value)}/>
                <button className='addBtn' id='langBtn' onClick={() => handleAddLang(langValue)}>Add +</button>
            </div>
        </div>
    )
}

Info.propTypes = {
    handleChange: PropTypes.func,
    handleAddSkill: PropTypes.func,
    skillValue: PropTypes.string,
    setSkillValue: PropTypes.func,
    handleAddLang: PropTypes.func,
    langValue: PropTypes.string,
    setLangValue: PropTypes.func,
    handleEducationForm: PropTypes.func,
    handleAddEducation: PropTypes.func,
    formData: PropTypes.objectOf(PropTypes.string),
    handleExpForm: PropTypes.func,
    handleAddExp: PropTypes.func,
    expData: PropTypes.objectOf(PropTypes.string),
};
