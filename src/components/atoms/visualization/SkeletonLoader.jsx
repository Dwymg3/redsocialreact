import React from "react";

const SkeletonLoader = () => {
    return (
        <div className="skeleton-loader">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
        </div>
    );
};

export default SkeletonLoader;