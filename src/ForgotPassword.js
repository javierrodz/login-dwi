import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/forgot-password', { email });
            alert(response.data);
        } catch (error) {
            console.error(error);
            alert('Error al enviar el correo');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Recuperar Contraseña</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ForgotPassword;
