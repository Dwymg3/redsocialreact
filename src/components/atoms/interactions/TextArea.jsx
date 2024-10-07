import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="textarea"
        />
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
    placeholder: '',
    value: '',
};

export default TextArea;