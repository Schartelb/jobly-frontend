import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";


const CompanyCard = (single) => {
console.log(single)
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {single.name}
                    </CardTitle>
                    <CardText>
                        {single.description}<br />
                        Employees: {single.numEmployees}
                    </CardText>
                    {/* <ListGroup>
                        {single.jobs.map(item => (
                            <Link to={`/jobs/${item.id}`} key={item.id}>
                                <ListGroupItem>{item.title}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup> */}
                </CardBody>
            </Card>
        </section>
    )
}

export default CompanyCard