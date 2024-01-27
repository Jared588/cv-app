import PropTypes from 'prop-types';

function InputContainer({ title, id, type }) {
    return (
        <div className="inputContainer">
            <label htmlFor={id}>{title} </label>
            <input type={type} id={id} />
        </div>
    );
}

InputContainer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
};

export default InputContainer;