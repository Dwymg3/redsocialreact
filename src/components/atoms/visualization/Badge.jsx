import React from "react";
import PropTypes from "prop-types";

const Badge = ({ count }) => {
    return(
        <span className="badge">
            {count}
        </span>
    );
};

Badge.propTypes = {
    count: PropTypes.number.isRequired,
};


export default Badge;