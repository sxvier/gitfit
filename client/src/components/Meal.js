import React, { useState } from 'react'
import { Alert, Button, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'


function Meal({onMeal}) {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [serving, setServing] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/meals', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                type,
                name,
                serving,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    onMeal(data)
                    // clear form
                    setType('')
                    setName('')
                    setServing('')
                }
            })
    }



    return (
        <Form onSubmit={handleSubmit}>
            { error && (<Alert variant="danger">{error}</Alert>)}
            <InputGroup className="mb-3">
                <FormGroup className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Type</Form.Label>
                    <FormControl value={type} onChange={(e) => setType(e.target.value)} type="text" placeholder="Breakfast, Lunch or Dinner" />
                </FormGroup>
                <br />
                <FormGroup className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Name</Form.Label>
                    <FormControl value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="What was it?" />
                </FormGroup>
                <br />
                <FormGroup className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Servings</Form.Label>
                    <FormControl value={serving} onChange={(e) => setServing(e.target.value)}  type="text" placeholder="How much?" />
                </FormGroup>
                <br />
                <Button type="submit" variant="primary">Submit</Button>
            </InputGroup>
        </Form>
    )
}

export default Meal