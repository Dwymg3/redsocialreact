import React, {useState} from "react";
import Input from "../atoms/interactions/Input";
import TextArea from "../atoms/interactions/TextArea";

const CommentSection = () => {
    const [comment, setComment] = useState([]);
    const [newComent, setNewComment] = useState("");

    const handleComment = () => {
        setComment([...comment, newComent]);
        setNewComment("");
    };

    return (
        <div className="coment-section">
            <TextArea
                placeholder="Deja tu comentario"
                value={newComent}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleComment}>Enviar</button>
            <div className="comment-list">
                {comment.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;