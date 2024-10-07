import React from 'react';
import '../../styles/MyProfilePage.css'; 

function MyProfilePage() {
    return (
        <div className="my-profile-container">
            <h1>Mi Perfil</h1>
            {/* Aquí irán los detalles del perfil */}
            <p>Nombre de Usuario: UsuarioEjemplo</p>
            <p>Correo Electrónico: usuario@example.com</p>
            {/* Aquí puedes incluir opciones para editar el perfil */}
        </div>
    );
}

export default MyProfilePage;
