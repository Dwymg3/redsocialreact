import React from "react";
import Image from "../atoms/visualization/Image";
import Label from "../atoms/interactions/Label";
import Button from "../atoms/interactions/Button";

const ImageCard = ({ imageSrc, title, description }) => {
    return (
        <div className="image-card">
            <Image src={imageSrc} alt={title} />
            <Label htmlFor="title" text={title} />
            <p>{description}</p>
            <Button text="Me gusta" />
            <Button text="Comentar" />
        </div>
    );
};

export default ImageCard;
