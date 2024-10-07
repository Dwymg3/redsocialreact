import React from "react";
import PropTypes from "prop-types";

const NotificationIcon = ({ count }) => {
    return (
        <div className="notification-icon">
            {count > 0 && <div className="notification-count">{count}</div>}
        </div>
    );
};

NotificationIcon.propTypes = {
    count: PropTypes.number.isRequired,
};


export default NotificationIcon;