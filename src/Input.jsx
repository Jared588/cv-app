import InputContainer from './containers/InputContainer';
import PropTypes from 'prop-types';
import './input.css';

export default function Info({ handleChange, handleAddSkill, skillValue, setSkillValue, handleAddLang, langValue, setLangValue }) {
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
            </div>

            {/* Education */}
            <div className="infoContainer">
                <h1>Education</h1>
                <InputContainer title='School' id='school' type="text"/>
                <InputContainer title='Degree' id='degree' type="text"/>
                <div className='dateContainer'>
                    <InputContainer title='Start Date' id='eduStartDate' type="date"/>
                    <InputContainer title='End Date' id='eduEndDate' type="date"/>
                </div>
                <InputContainer title='Location' id='eduLocation' type="text"/>
                <button className='addBtn' id='eduBtn'>Add +</button>
            </div>

            {/* Experience */}
            <div className="infoContainer">
                <h1>Experience</h1>
                <InputContainer title='Company Name' id='company' type="text"/>
                <InputContainer title='Position Title' id='position' type="text"/>
                <div className='dateContainer'>
                    <InputContainer title='Start Date' id='expStartDate' type="date"/>
                    <InputContainer title='End Date' id='expEndDate' type="date"/>
                </div>
                <InputContainer title='Location' id='compLocation' type="text"/>
                <div className="inputContainer">
                    <label htmlFor="description">Description </label>
                    <textarea name="description" id="description" cols="30" rows="5" className='textarea'></textarea>
                </div>
                <button className='addBtn' id='expBtn'>Add +</button>
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
};
