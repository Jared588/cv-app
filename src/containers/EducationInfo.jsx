import PropTypes from 'prop-types';
import '../App.css'

function EducationInfo({ startDate, endDate, degree, school}) {
    return (
        <div className="education-container">
            <h1>{degree}</h1>
            <h2>{school}</h2>
            <h2>{startDate} - {endDate}</h2>
        </div>
    )   
}

EducationInfo.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    degree: PropTypes.string,
    school: PropTypes.string
}

export default EducationInfo;