import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Signup from '../Signup/Signup';
import checktoken from '../../resolvers/checkToken';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';
import WatchMovie from '../WatchMovie/WatchMovie'
import FormMovie from  '../FormMovie/FormMovie';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import Profile from '../Profile/Profile';
import EditProfile from '../Profile/EditProfile';


class Routes extends Component {
    render(){

        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render = {(props) => (
            checktoken() === true ? <Component {...props}/> : <Redirect to = '/login'/> )}
            />
        )

        return(
            <Router>
                <main>
                    <Navbar/>
                    <Route exact path = "/" component = {Home} />
                    <Route exact path = "/login" component = {Login} />
                    <Route exact path = "/signup" component = {Signup} />
                    <PrivateRoute exact path = "/logout" component = {Logout} /> 
                    <PrivateRoute exact path = "/movies" component = {Movies} />
                    <PrivateRoute exact path = "/movie/:id" component = {Movie} /> 
                    <PrivateRoute exact path = "/ver/:id" component = {WatchMovie} /> 
                    <PrivateRoute exact path = "/movies/add" component = {FormMovie} /> 
                    <PrivateRoute exact path = "/movie/delete/:id" component = {DeleteMovie} /> 
                    <PrivateRoute exact path = "/profile/:id" component = {Profile} /> 
                    <PrivateRoute exact path = "/profile/edit/:id" component = {EditProfile} /> 
                </main>
            </Router>

        )
    }
}

export default Routes;