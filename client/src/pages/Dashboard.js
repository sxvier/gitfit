import React, { useEffect, useState } from 'react'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MealForm from '../components/MealForm'
import WorkoutForm from '../components/WorkoutForm'



function Dashboard() {
    const [workouts, setWorkouts] = useState([])
    const [meals, setMeals] = useState([])
    const { user } = useSelector(state => state.user)

    const fetchWorkouts = (data) => {
        fetch('/api/v1/workouts')
            .then(res => res.json())
            .then(data => {
                setWorkouts(data)
            })
    }
    const fetchMeals = (data) => {
        fetch('/api/v1/meals')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
            })
    }

    useEffect(() => {
        fetchWorkouts()
    }, [])

    useEffect(() => {
        fetchMeals()
    }, [])

    return (
        <Container className="mb-3">
            <ListGroup horizontal>
                <ListGroupItem>
            <Card>
                    {user && <WorkoutForm onWorkout={fetchWorkouts} />}
                    {workouts.map((workouts) => {
                        return (
                            <WorkoutForm key={workouts.id} workout={workouts} />

                        )
                    })}
            </Card>
            </ListGroupItem>
            <ListGroupItem>
            <Card>
                    {user && <MealForm onMeal={fetchMeals} />}
                    {meals.map((meal) => {
                        return (
                            <MealForm key={meals.id} meal={meal} />

                        )
                    })}
            </Card>
            </ListGroupItem>
            </ListGroup>
        </Container>
        

    )
}

export default Dashboard
