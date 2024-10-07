import React from "react";
import ProtoTypes from "prop-types";

const Button = ({ type="button", variant="primary", childern, onClick, disable = false }) => {
   return (
        <button
            type={type}
            className={`btn btn-${variant}`}
            onClick={onClick}
            disabled={disable}
        >
            {childern}
        </button>
    );
};

Button.propTypes = {
    type: ProtoTypes.string,
    variant: ProtoTypes.string,
    childern: ProtoTypes.node.isRequired,
    onClick: ProtoTypes.func,
    disable: ProtoTypes.bool,
};


export default Button;