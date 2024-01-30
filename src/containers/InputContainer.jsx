import PropTypes from 'prop-types';

function InputContainer({ title, id, type, onChange }) {
    return (
        <div className="inputContainer">
            <label htmlFor={id}>{title} </label>
            <input type={type} id={id} onChange={(e) => onChange(id, e.target.value)}/>
        </div>
    );
}

InputContainer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default InputContainer;