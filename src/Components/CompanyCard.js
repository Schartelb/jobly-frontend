import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import currUserContext from '../Context/CurrUserContext';

const CompanyCard = ({ applyToJob, single, handle }) => {
    const currUser = useContext(currUserContext)

    return (
        <section className="col-md-4">
            <Card key={uuid()}>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {single.name}
                    </CardTitle>
                    <CardText>
                        {single.description}<br />
                        {handle === single.handle && <>Employees: {single.numEmployees}</>}
                    </CardText>
                    {handle === single.handle && <ListGroup>
                        {single.jobs.map(item => (
                            <>
                                <Link to={`/jobs/${item.id}`} key={item.id}>
                                    <ListGroupItem>{item.title}</ListGroupItem>
                                </Link>
                                {currUser.applications.includes(item.id) ?
                                    <button onClick={() => { applyToJob(item.id) }}>Apply Now!</button> :
                                    <>Applied!</>}
                            </>
                        ))}
                    </ListGroup>}
                    {handle === undefined && <Link to={`/companies/${single.handle}`} key={single.handle}>More Information</Link>}
                </CardBody>
            </Card>
        </section>
    )
}

export default CompanyCard