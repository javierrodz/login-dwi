import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8081/reset-password/${token}`, { newPassword });
            alert(response.data);
        } catch (error) {
            console.error(error);
            alert('Error al restablecer la contraseña');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Restablecer Contraseña</h2>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Ingresa tu nueva contraseña"
                required
            />
            <button type="submit">Restablecer</button>
        </form>
    );
};

export default ResetPassword;
