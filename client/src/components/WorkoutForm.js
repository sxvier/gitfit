import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import "../components/main.css"


function WorkoutForm(props) {
    if (!props.workout){
        return('')
    }
    const { name, reps, start_date } = props.workout;
    return (
        <Card className="card-style">
            <Card.Header>Workouts</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Reps: {reps}</ListGroup.Item>
                <ListGroup.Item>Date: {start_date}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default WorkoutForm