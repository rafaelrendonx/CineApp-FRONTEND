import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import payload from '../../resolvers/payload';

class Navbar extends Component {

    chargeProfile = () => {
      const token = localStorage.getItem('token');
      if(token !== null){
        
        let pl = payload(token);
        return (
          <ul className = "navbar-nav">
            <li className = "navbar-item">
              <Link className = "nav-link" to = "/perfil">Welcome, {pl.email}</Link>
            </li>
            <li className = "navbar-item">
              <Link className = "nav-link" to = "/movies">Movies</Link>
            </li>
            <li className = "navbar-item">
              <Link className = "nav-link" to = "/movies/add">Add Movies</Link>
            </li>
            <li className = "navbar-item">
              <Link className = "nav-link" to = "/logout">Log Out</Link>
            </li>
          </ul>
        )
      }else{
        return(
        <ul className = "navbar-nav">
        <li className = "navbar-item">
              <Link className = "nav-link" to = "/login">Login</Link>
            </li>
            <li className = "navbar-item">
              <Link className = "nav-link" to = "/signup">Sign Up</Link>
            </li>
          </ul>
        )
      }
    }

    render() {
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {this.chargeProfile()}
          
        </div>
      </nav>
        )
    }
}

export default Navbar;