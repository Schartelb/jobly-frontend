import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = (logout) => {

    return (
        <div>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Jobly Home
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Company List</NavLink >
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Job List</NavLink >
                    </NavItem>
                    {window.localStorage.token === 'undefined' && <> <NavItem>
                        <NavLink to="/login">Login</NavLink >
                    </NavItem>
                        <NavItem>
                            <NavLink to="/signup">Signup</NavLink >
                        </NavItem></>}
                    {window.localStorage.token !== 'undefined' && <><NavItem>
                        <NavLink to="/profile">Profile</NavLink >
                    </NavItem>
                    <NavItem>
                    <NavLink  to={logout}>Logout</NavLink>
                    </NavItem></>}

                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar
