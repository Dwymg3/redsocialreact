import React from 'react';
import '../../styles/FeedPage.css'; 

function FeedPage() {
    return (
        <div className="feed-container">
            <h1>Feed</h1>
            {/* Aquí irán las publicaciones */}
            <div className="post">
                <h2>Nombre del Usuario</h2>
                <p>Descripción de la publicación.</p>
                <img src="url_de_la_imagen" alt="Descripción" />
            </div>
            {/* Agrega más publicaciones aquí */}
        </div>
    );
}

export default FeedPage;
