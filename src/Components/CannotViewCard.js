import React from "react"
import {Link} from "react-router-dom"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"

const CannotViewCard=()=>{
return (
    <section className="col-md-4">
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    You must be logged in to view that page!
                </CardTitle>
                <CardText className="font-italic">
                    <Link to="/login" ><button >Login to Jobly!</button></Link><br/>
                    <Link to="/signup" ><button >Signup to Jobly!</button></Link>
                </CardText>
            </CardBody>
        </Card>
    </section>
)
}

export default CannotViewCard