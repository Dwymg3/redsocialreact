import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src, alt, size ="medium" }) => {
    return <img className={`avatar ${size}`} src={src} alt={alt} />;
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};


export default Avatar;