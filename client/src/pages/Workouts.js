import React from 'react'
import { Container } from 'react-bootstrap'
import Workout from '../components/Workout'

export default function Workouts() {
    const fetchWorkouts= () => {

    }
    return (
        <Container className="mb-3">
            <Workout onWorkout={fetchWorkouts}  />
        </Container>
    )
}

