import './input.css'
import InputContainer from './containers/InputContainer'

export function GeneralInfo() {
    return  (
        <div className="infoContainer">
            <h1>Personal Details</h1>
            <InputContainer title='Full Name' id='fullName' type="text"/>
            <InputContainer title='Email' id='email' type="email"/>
            <InputContainer title='Phone Number' id='phoneNumber' type="tel"/>
            <InputContainer title='Address' id='address' type="text"/>
        </div>
    )
}

export function EducationInfo() {
    return  (
        <div className="infoContainer">
            <h1>Education</h1>
            <InputContainer title='School' id='school' type="text"/>
            <InputContainer title='Degree' id='degree' type="text"/>
            <div className='dateContainer'>
                <InputContainer title='Start Date' id='eduStartDate' type="date"/>
                <InputContainer title='End Date' id='eduEndDate' type="date"/>
            </div>
            <InputContainer title='Location' id='eduLocation' type="text"/>
        </div>
    )
}

export function ExperienceInfo() {
    return  (
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
        </div>
    )
}