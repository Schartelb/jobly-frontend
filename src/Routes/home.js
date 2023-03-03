import React from "react";

const Home=()=>{
    let username = (window.localStorage.getItem("username"))
    return(
        <div>
            Welcome to Jobly{username!=='undefined' && <>, {username}</>}! 
        </div>
    )
}

export default Home