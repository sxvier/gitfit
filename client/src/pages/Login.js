import React, { useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('api/v1/users/login', {
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
                    history.push('/');
                }
            })
    }

    return (
        <Container>
            {error && (<Alert variant="danger">{error}</Alert>)}
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    Don't have an account? <Link to="/register">Register Here</Link>
                </Card.Footer>
            </Card>
        </Container>
    )
}
