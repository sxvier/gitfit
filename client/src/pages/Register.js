import React, { useState } from 'react'
import { useHistory } from 'react-router'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('api/v1/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                // redirect
                history.push('/login');
            }
        })
}

    return (
        <div>
            { error && (<div className="error">{error}</div>) }
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Username</span>
                    <input value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <br />
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <br />
                <label>
                    <span>Password</span>
                    <input value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
