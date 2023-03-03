import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Home from "./Routes/home";
import List from './Routes/list';
import LoginPage from './Routes/login';
import Profile from './Routes/profile';
import Signup from './Routes/signup';
import SinglePage from './Routes/singlepage';
import NavBar from "./NavBar"
import jwt_decode from "jwt-decode";
import CurrUserContext from './Context/CurrUserContext';
import CompanyContext from './Context/CompanyContext';
import JobContext from './Context/JobContext';
import useLocalStorageState from './hooks/useLocalStorageState';
import './App.css';
import JoblyApi from './api';

function App() {
  const [token, setToken] = useLocalStorageState('token', "")
  const [username, setUsername] = useLocalStorageState('username', "")
  const [currUser, setcurrUser] = useState()
  const history = useHistory()
  const [compList, setCompList] = useState()
  const [jobList, setJobList] = useState()

  useEffect(() => {
    async function getList() {
      let CompList = await JoblyApi.getCompanies()
      let JobList = await JoblyApi.getJobs()
      setCompList(CompList)
      setJobList(JobList)
    }

    getList()
  }, [])

  async function login(userData) {
    try {
      let token = await JoblyApi.userLogin(userData)
      let userInfo = await JoblyApi.userInfo(userData.username)
      setcurrUser({
        ...userInfo,
      })
      setToken(token)
      setUsername(userInfo.username)
    } catch (error) {
      alert(`Login Error: `, error)
    }
  }
  async function register(userData) {
    try {
      let token = await JoblyApi.userRegister(userData)
      let userInfo = await JoblyApi.userInfo(userData.username)
      setcurrUser({
        ...userInfo
      })
      setToken(token)
      setUsername(userInfo.username)
    } catch (error) {
      alert(`Registration Error: `, error)
    }
  }
  function logout() {
    window.localStorage.clear()
    history.push('/')
  }
  async function editUser(formData) {
    let userData = {}
    for (const [key, value] of Object.entries(formData)) {
      if (value) { userData[key] = value }
    }
    let update = await JoblyApi.userEdit(userData)
    alert("User Updated!")
  }
  async function findCompanies(formData) {
    let apiSearch = await JoblyApi.searchCompanies(formData.nameLike)
    setCompList(apiSearch)
  }

  async function applyToJob(jobId){
    const applyData = {'username':currUser.username, 'jobId':jobId}
    let apply = await JoblyApi.applyToJob(applyData)
    console.log(currUser)
    setcurrUser(userData => ({
      ...userData,
      applications:[...currUser.applications,apply]
  }))
  console.log(currUser)
  }
  return (
    <BrowserRouter>
      <CurrUserContext.Provider value={currUser}>
        <CompanyContext.Provider value={compList}>
          <JobContext.Provider value={jobList}>
            <NavBar logout={logout} />
            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/login">
                  <LoginPage login={login} />
                </Route>
                <Route exact path="/signup">
                  <Signup register={register} />
                </Route>
                <Route exact path="/profile">
                  <Profile editUser={editUser} />
                </Route>
                <Route exact path="/:list" >
                  <List findCompanies={findCompanies} applyToJob={applyToJob}/>
                </Route>
                <Route path="/:list/:handle">
                  <SinglePage cantFind="/" applyToJob={applyToJob}/>
                </Route>
              </Switch>
            </main>
          </JobContext.Provider>
        </CompanyContext.Provider>
      </CurrUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
