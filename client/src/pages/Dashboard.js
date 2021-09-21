import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Workout from '../components/Workout'

function Dashboard() {
    useEffect(() => {
        // fetch('/api/v1/workouts')
    })
    return (
        <Container className="mb-3">
            <Workout />
        </Container>
        
    )
}

export default Dashboard