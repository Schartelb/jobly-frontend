import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from "reactstrap";


const JobCard=(single)=>{
    console.log(single)
return(
<section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {single.title}
            </CardTitle>
            <CardText>
                {single.company}
              Salary: {single.salary}<br/>
              Equity: {single.equity}<br />
              {/* <Link to={`/companies/${single.company.handle}`}>{single.company.name}</Link> */}
            </CardText>

          </CardBody>
        </Card> 
      </section>
      )}

export default JobCard