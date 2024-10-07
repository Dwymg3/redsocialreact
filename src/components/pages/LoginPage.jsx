import React, { useState } from 'react';
import Input from '../atoms/interactions/Input';  
import Button from '../atoms/interactions/Button';
import '../../styles/LoguinPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
      // Aquí deberías agregar la lógica de autenticación
  };

  return (
      <div className="login-container">
          <div className="login-form">
              <h1>Inicio de Sesión</h1>
              <form onSubmit={handleLogin}>
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
                      disable={!email || !password}
                  >
                      Iniciar Sesión
                  </Button>
              </form>
              <p>
                  ¿No tienes una cuenta? <a href="/register">Regístrate</a>
              </p>
          </div>
      </div>
  );
}

export default LoginPage;