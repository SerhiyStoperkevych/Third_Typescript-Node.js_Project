import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/signUp', { username, password });
            setMessage(response.data.message);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error: any) {
            setMessage(error.response ? error.response.data.message : 'Error signing up');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
                <button type="button" onClick={() => navigate('/login')}>Back</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default SignUp;
