import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import JoblyApi from "../api"
import { v4 as uuid } from 'uuid'
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardText
} from "reactstrap"
import CompanyCard from "../Components/CompanyCard";
import JobCard from "../Components/JobCard";
import CannotViewCard from "../Components/CannotViewCard";
import CurrUserContext from "../Context/CurrUserContext"
import JobContext from "../Context/JobContext";
import CompanyContext from "../Context/CompanyContext";

const List = ({findCompanies, applyToJob}) => {
  const { list } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState()
  const currUser = useContext(CurrUserContext)
  const compList = useContext(CompanyContext)
  const jobList = useContext(JobContext)





  if (!window.localStorage.getItem('token')) {
    return <CannotViewCard />
  }
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  // console.log(fullList)
  const title = list.charAt(0).toUpperCase() + list.slice(1)


  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setIsLoading(true)
    findCompanies(formData)
    setFormData("")
    setTimeout(setIsLoading(false),1000)
  }

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder="Search.." name="nameLike" />
          <button ><i className="fa fa-search"></i></button>
        </form>
      </div>
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {title}
            </CardTitle>
            {list === "companies" && <ListGroup>
              {compList.map(item => (
                <CompanyCard single={item} key={uuid()} />
              ))}
            </ListGroup>}
            {list === "jobs" && <ListGroup>
              {jobList.map(item => (
                <JobCard single={item} key={uuid()} />
              ))}
            </ListGroup>}
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default List