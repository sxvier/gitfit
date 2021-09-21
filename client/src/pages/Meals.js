import React from 'react'
import { Container } from 'react-bootstrap'
import Meal from '../components/Meal'

export default function Meals() {
    const fetchMeals = () => {

    }
    return (
        <Container className="mb-3">
            <Meal onMeal={fetchMeals}/>
        </Container>
    )
}
