import React, { useState, useContext } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";
import currUserContext from "../Context/CurrUserContext";

const Profile = ({ editUser }) => {
    const currUser = useContext(currUserContext)
    const INITIAL_STATE = {
        ...currUser,
        'password': ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        editUser(formData)
        setFormData(INITIAL_STATE)
    }
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                    </CardTitle>
                    <CardText className="font-italic">
                        <form onSubmit={handleSubmit}>

                            <label className="input" htmlFor="password">Password: </label>
                            <input
                                type='password'
                                id="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                            />
                            <br />

                            <label className="input" htmlFor="firstName">First Name: </label>
                            <input
                                type='text'
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                            <br />

                            <label className="input" htmlFor="lastName">Last Name: </label>
                            <input
                                type='text'
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                            <br />
                            <label className="input" htmlFor="email">Email: </label>
                            <input
                                type='email'
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <br />
                            <button>Edit your Profile</button>
                        </form>
                    </CardText>
                </CardBody>
            </Card>
        </section>
    )
}

export default Profile