import PropTypes from 'prop-types';
import '../Cv.css'

function ExperienceInfo({ startDate, endDate, companyName, position, location, description}) {
    return (
        <div className="experience-container">
            <h1>{position}</h1>
            <h2>{companyName} | {location} | {startDate} - {endDate}</h2>
            <p>{description}</p>
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
