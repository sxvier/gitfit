import React, { Component } from 'react'
import axios from 'axios';

export default class Meal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lastName: '',
            firstName: ''
        }
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8000/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { lastName, firstName } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" onChange={this.onChange} value={lastName} />
                    </label>
                    <label>
                        First Name:
                        <input type="text" name="firstName" onChange={this.onChange} value={firstName} />
                    </label>
                    <button type="submit">Add Guest</button>
                </form>
            </div>
        )
    }
};