import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '../../firebase';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/slice/userSlice';
import { setCurrentPage } from '../../features/slice/navigationSlice';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            dispatch(setUser({ uid: userCredential.user.uid, email: userCredential.user.email }));
            dispatch(setCurrentPage('home'));
            setMessage('Успешный вход!');
        } catch (error: any) {
            if (error.code === 'auth/invalid-credential') {
                try {
                    const newUser = await createUserWithEmailAndPassword(auth, email, password);
                    dispatch(setUser({ uid: newUser.user.uid, email: newUser.user.email }));
                    setMessage('Пользователь успешно зарегистрирован!');
                } catch (createError: any) {
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
                            minLength={4}
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
