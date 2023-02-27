import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CompanyCard from "../Components/CompanyCard";
import JobCard from "../Components/JobCard";
import './singlepage'




const SinglePage = () => {
    const { list, handle } = useParams()
    const [single, setSingle] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getCompany() {
            let single = await JoblyApi.getCompany(handle)
            setSingle(single)
            setTimeout(()=>{setIsLoading(false)},2000) 
        }
        async function getJob() {
            let single = await JoblyApi.getJob(handle)
            setSingle(single)
            setTimeout(()=>{setIsLoading(false)},2000) 
        }
        list === "companies" ? getCompany() : getJob()
    }, [])
console.log(single)
    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <section className="col-md-4">
            <CompanyCard single={single}/>
        </section>
    )
}
export default SinglePage