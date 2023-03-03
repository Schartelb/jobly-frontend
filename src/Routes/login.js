import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";

const LoginPage = ({login}) => {
    const [formData, setFormData] = useState({ username: "testuser", password: "password" })
    const history= useHistory()

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        login(formData)
        history.push('/')     
    }
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Please Login
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
                            <button>Login to Jobly!</button>
                        </form>
                    </CardText>
                </CardBody>
            </Card>
        </section>
    )
}

export default LoginPage