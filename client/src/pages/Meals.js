import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Meal from '../components/Meal'

export default function Meals() {
    const fetchMeals = () => {

    }
    return (
        <Container className="mb-3">
            <Card>
                <Card.Body>
            <Meal onMeal={fetchMeals}/>
            </Card.Body>
            </Card>
        </Container>
    )
}
