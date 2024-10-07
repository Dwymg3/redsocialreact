import React, {useState} from "react";
import Input from "../atoms/interactions/Input";
import Button from "../atoms/interactions/Button";
import TextArea from "../atoms/interactions/TextArea";

const ProfileEdit = ({currentUsername, currentBio, onSave}) =>{
    const [username, setUsername] = useState(currentUsername);
    const [bio, setBio] = useState(currentBio);

    return(
        <div className="profile-edit">
            <Input
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextArea
                placeholder="Biografía"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
            <Button text="Guardar" onClick={() => onSave(username, bio)} />
        </div>
    );
}


export default ProfileEdit;