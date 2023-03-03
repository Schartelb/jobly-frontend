import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CompanyCard from "../Components/CompanyCard";
import JobCard from "../Components/JobCard";
import CannotViewCard from "../Components/CannotViewCard";

import './singlepage'
import CurrUserContext from "../Context/CurrUserContext";

const SinglePage = ({ applyToJob }) => {
    const { list, handle } = useParams()
    const [single, setSingle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        async function fetchinfo() {
            if (list === "companies") {
                let lookup = await JoblyApi.getCompany(handle)
                setSingle(lookup)
            }
            if (list === "jobs") {
                let lookup = await JoblyApi.getJob(handle)
                setSingle(lookup)
            }
            setIsLoading(false)
        }
        fetchinfo()
    }, [])
    if (token === 'undefined') {
        return <CannotViewCard />
    }
    // console.log(single)
    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }
    return (
        <section className="col-md-4">
            {list === "companies" && <CompanyCard applyToJob={applyToJob} single={single} handle={handle} />}
            {list === "jobs" && <JobCard applyToJob={applyToJob} single={single} handle={handle} />}
        </section>
    )
}
export default SinglePage