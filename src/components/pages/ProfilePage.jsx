import React from 'react';
import '../../styles/ProfilePage.css'; 
function ProfilePage() {
    return (
        <div className="profile-container">
            <h1>Perfil de Usuario</h1>
            {/* Aquí irán los detalles del perfil */}
            <p>Nombre de Usuario: UsuarioEjemplo</p>
            <p>Correo Electrónico: usuario@example.com</p>
            {/* Aquí puedes incluir las publicaciones de este usuario */}
        </div>
    );
}

export default ProfilePage;
