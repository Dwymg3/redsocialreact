import React from "react";
import Notification from "../atoms/Notification";

const NotificationItem = ({ message, type }) => {
    return(
        <div className="notification-item">
            <NotificationIcon count={count} />
            <span>{message}</span>
        </div>
    );
};


export default NotificationItem;