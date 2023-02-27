import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";

const Login = () => {
    console.log(`Navigated to login`)
    const [formData, setFormData] = useState({ username: "", password: "" })
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault()
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
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <br />

                            <label className="input" htmlFor="password">Password: </label>
                            <input
                                id="password"
                                name="password"
                                value={formData.password}
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

export default Login