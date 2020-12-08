import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="card mx-auto">
                    <div className="card-header">
                        asd
    </div>
                    <div className="card-body">
                        <form onSubmit={submit}>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </form>
                        <Notification />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyLoginPage;
