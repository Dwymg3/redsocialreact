import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", variant = "primary", children, onClick, disable = false }) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant}`} 
            onClick={onClick}
            disabled={disable}
        >
            {children}  {/* Corregido: 'childern' a 'children' */}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
};

export default Button;
