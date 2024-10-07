import React from "react";
import Avatar from "../atoms/visualization/Avatar";
import Badge from "../atoms/visualization/Badge";
import Label from "../atoms/interactions/Label";

const UserProfile = ({ username, avatarSrc, followersCount }) => {
    return (
        <div className="user-profile">
            <Avatar src={avatarSrc} alt={username} size="medium" />
            <Label htmlFor="username" text={username} />
            <Badge count={followersCount} />
        </div>
    );
};

export default UserProfile;