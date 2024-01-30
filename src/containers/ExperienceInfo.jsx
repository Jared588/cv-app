import PropTypes from 'prop-types';
import '../App.css'

function ExperienceInfo({ startDate, endDate, companyName, position, location, description}) {
    return (
        <div className="education-container">
            <h1>{position}</h1>
            <h2>{companyName}</h2>
            <h2>{location}</h2>
            <h2>{startDate} - {endDate}</h2>
            <h2>{description}</h2>
        </div>
    )
}

ExperienceInfo.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    companyName: PropTypes.string,
    position: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
}

export default ExperienceInfo;
