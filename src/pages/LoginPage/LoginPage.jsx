import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (auth.currentUser) {
            setMessage(`Вы уже вошли как ${auth.currentUser.email}.`);
            setIsLoading(false);
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setMessage('Успешный вход!');
            console.log('Вошёл пользователь:', userCredential.user);
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                try {
                    const newUser = await createUserWithEmailAndPassword(auth, email, password);
                    setMessage('Пользователь успешно зарегистрирован!');
                    console.log('Зарегистрирован пользователь:', newUser.user);
                } catch (createError) {
                    if (createError.code === 'auth/email-already-in-use') {
                        setMessage('Неправильный пароль.');
                    } else {
                        setMessage(`Ошибка регистрации: ${createError.message}`);
                    }
                }
            } else {
                setMessage(`Ошибка: ${error.message}`);
            }
        }

        setIsLoading(false);
    };

    const handleCancel = () => {
        setEmail('');
        setPassword('');
        setMessage('');
    };

    return (
        <main>
            <section className="container wrapper">
                <h1>Log in</h1>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <p>User name</p>
                        <input 
                            type="email" 
                            placeholder="Введите email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input"
                            required
                        />
                    </div>

                    <div className="input-container">
                        <p>Password</p>
                        <input 
                            type="password" 
                            placeholder="Введите пароль"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="input"
                            required
                            minLength="4"
                        />
                    </div>

                    <div className="button-container">
                        <button className="button submit" type="submit" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                        <button className="button cancel" type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>

                    {message && (
                        <div className={`message ${message.includes('уже вошли') ? 'already-logged-in' : ''}`}>
                            {message}
                        </div>
                    )}
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
