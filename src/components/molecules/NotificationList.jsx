import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications }) => {
    return (
        <div className="notfication-list">
            {notifications.map((notification, index) => (
                <NotificationItem
                    key={index}
                    message={notification.message}
                    type={notification.type}
                />
            ))}
        </div>
    );
};

export default NotificationList;