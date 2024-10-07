import React from "react";

const Divider = ({className="", ...rest}) => {
    return <hr className={`divider ${className}`} {...rest} />;
};

export default Divider;