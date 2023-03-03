import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";

const Signup = ({ register }) => {
    const [formData, setFormData] = useState({ username: "", password: "" })

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        // console.log(formData)
        register(formData)
    }
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Please Register
                    </CardTitle>
                    <CardText className="font-italic">
                        <form onSubmit={handleSubmit}>
                            <label className="input" htmlFor="username">Username: </label>
                            <input
                                type='text'
                                id="username"
                                name="username"
                                onChange={handleChange}
                            />
                            <br />

                            <label className="input" htmlFor="password">Password: </label>
                            <input
                                type='password'
                                id="password"
                                name="password"
                                onChange={handleChange}
                            />
                            <br />

                            <label className="input" htmlFor="firstName">First Name: </label>
                            <input
                                type='text'
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                            />
                            <br />

                            <label className="input" htmlFor="lastName">Last Name: </label>
                            <input
                                type='text'
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                            />
                            <br />
                            <label className="input" htmlFor="email">Email: </label>
                            <input
                                type='email'
                                id="email"
                                name="email"
                                onChange={handleChange}
                            />
                            <br />
                            <button>Signup to Jobly!</button>
                        </form>
                    </CardText>
                </CardBody>
            </Card>
        </section>
    )
}

export default Signup