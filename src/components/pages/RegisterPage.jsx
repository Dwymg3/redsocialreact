import React, { useState } from 'react';
import Input from '../atoms/interactions/Input'; 
import Button from '../atoms/interactions/Button';   
import '../../styles/RegisterPage.css'; 

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Regístrate</h1>
                <form onSubmit={handleRegister}>
                    <Input 
                        type="text" 
                        placeholder="Nombre de usuario" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <Input 
                        type="email" 
                        placeholder="Correo electrónico" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Input 
                        type="password" 
                        placeholder="Contraseña" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <Button 
                        type="submit" 
                        variant="primary" 
                        disable={!username || !email || !password}
                    >
                        Crear Cuenta
                    </Button>
                </form>
                <p>
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
