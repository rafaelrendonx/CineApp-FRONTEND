import React, { Component } from 'react';
import watchMovie from '../../services/watchMovie';
import deleteMovie from '../../services/deleteMovie';

class DeleteMovie extends Component {

    state = {
        movieData: ''
    }

    componentDidMount(){
        watchMovie(this.props.match.id).then((resp) => {
            console.log(resp.data.dat.singleMovies)
            this.setState({
                movieData: resp.data.data.singleMovies
            })
        }).catch((err) => {
            console.log(err);
        })
        console.log(this.state)
    }

    deleteMovie = () =>{
        deleteMovie(this.props.match.params.id).then((resp) => {
            console.log(resp)
            this.props.history.push('/movies');

        }).catch((err) => {console.log(err)})
    }

    goBack = () => {
        this.props.history.push('/movie/'+this.props.match.params.id)
    }

    renderOptions(){
        const {name, image} = this.state.movieData
        console.log(this.state)
        if(!this.state){
            return(
                <div></div>
            )
        }else{

            return(
                <div className = 'jumbotron'>
                    Are you sure you want to delete the movie <strong>{name}</strong> ?
                    <button className = "btn btn-danger" onClick = {this.deleteMovie}>
                        YES
                    </button>
                    <button className = "btn btn-info" onClick = {this.goBack}>
                        NO
                    </button>
                    <img src = {image} alt = ""/>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderOptions}
            </div>
        )
    }
}

export default DeleteMovie;