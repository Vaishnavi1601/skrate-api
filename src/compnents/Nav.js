import React from 'react';
import logoImg from './../assets/images/logo_light.png';
import { Link} from "react-router-dom"

export default function Nav() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" >
            <img src={logoImg} alt='logo' />
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/all-users" className="navbar-item">
              All Users
            </Link>
            <Link to="/all-meetings" className="navbar-item">
              All Meetings
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/add-user" className="button is-primary">
                  <strong>Add User</strong>
                </Link>
                <Link to="/add-meeting" className="button is-primary">
                  Add Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
