import React from "react";
import { useParams,Link } from "react-router-dom";
import JoblyApi from "../api"
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";

const List = () => {
    const {list} = useParams()
    console.log(list)
    const fullList = list === "companies"? JoblyApi.getCompanies():JoblyApi.getJobs()
    console.log(fullList)
    return (
        <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Companies
            </CardTitle>

            <ListGroup>
              {/* {fullList.map(item => (
                <Link to={`/${list}/${item.id}`} key={item.id}>
                  <ListGroupItem>{item.name}</ListGroupItem>
                </Link>
              ))} */}
            </ListGroup>
          </CardBody>
        </Card>
      </section>
    )
}

export default List