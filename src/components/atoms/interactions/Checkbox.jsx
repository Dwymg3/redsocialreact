import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, checked, onChange, label, disable = false }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                disabled={disable}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disable: PropTypes.bool,
};

export default Checkbox;