import React from "react";
import UserProfile from "../atoms/UserProfile";
import ImageCard from "../atoms/ImageCard";
import CommentSection from "./CommentSection";

const FeedItem =({user, image, description, followerCount}) => {
    return(
        <div className="feed-item">
            <UserProfile
            username={user.username}
            avatarSrc={user.avatarSrc}
            followersCount={user.followersCount}
            />
            <ImageCard
            imageSrc={image.imageSrc}
            title={image.title}
            description={image.description}
            />
            <CommentSection />
        </div>
    );
};

export default FeedItem;