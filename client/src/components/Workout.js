import React, { useState } from 'react'
import { Alert, Button, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'


function Workout({onWorkout}) {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [start_date, setStart_Date] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/workouts', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name,
                reps,
                start_date,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    onWorkout(data)
                    // clear form
                    setName('')
                    setReps('')
                    setStart_Date('')
                } 
            })
    }



    return (
        <Form onSubmit={handleSubmit}>
            { error && (<Alert variant="danger">{error}</Alert>)}
            <InputGroup className="mb-3">
                <FormGroup className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Workout Name</Form.Label>
                    <FormControl value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                </FormGroup>
                <br />
                <FormGroup className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Reps</Form.Label>
                    <FormControl value={reps} onChange={(e) => setReps(e.target.value)} type="text" placeholder="How Many?" />
                </FormGroup>
                <br />
                <FormGroup className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Start Date</Form.Label>
                    <FormControl value={start_date} onChange={(e) => setStart_Date(e.target.value)} type="text" placeholder="When?" />
                </FormGroup>
                <br />
                <Button type="submit" variant="primary">Submit</Button>
            </InputGroup>
        </Form>
    )
}

export default Workout
