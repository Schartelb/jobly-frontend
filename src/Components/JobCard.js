import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import currUserContext from '../Context/CurrUserContext';

const JobCard = ({ applyToJob, single }) => {
  const currUser = useContext(currUserContext)

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center" >
            {single.title}
          </CardTitle>
          <CardText>
            Salary: {single.salary}<br />
            Equity: {single.equity}<br />
            <br />
            {currUser.applications.includes(single.id) ?
              <button onClick={() => { applyToJob(single.id) }}>Apply Now!</button> :
              <>Applied!</>}
            <Link to={`/companies/${single.companyHandle}`}>{single.companyName}</Link>
          </CardText>

        </CardBody>
      </Card>
    </section>
  )
}

export default JobCard