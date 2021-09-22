import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import "../components/main.css"


function MealForm(props) {
    if (!props.meal){
        return('')
    }
    const { type, name, serving } = props.meal;
    return (
        <Card className="card-style">
            <Card.Header>Meals</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                <ListGroup.Item>Type: {type}</ListGroup.Item>
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Servings: {serving}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default MealForm