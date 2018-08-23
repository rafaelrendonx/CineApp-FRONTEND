import React, { Component } from 'react';
import allGenres from '../../services/allGenres';
import allRatings from '../../services/allRatings';

class FormMovie extends Component {

    state = {
        name: "",
        synospsis: "",
        genre:"",
        director:"",
        year:"",
        url:"",
        image:"",
        rating:"",
        allGenres:[],
        allRatings:[],
        formfull: false,
    }

    componentDidMount(){
        allGenres().then((resp) => {
            this.setState({allGenres: resp.data.data.allGenres})
        })

        allRatings().then((resp) => {
            this.setState({allRatings: resp.data.data.allRatings})
        })
    }

    createSelecter = (data, name) => {
        let options = data.map((option) => {
        return(
            <option key = {option._id} value = {option._id}>{option.name}</option>
        )
    })
    return(
        <select name={name} id = {name} value = {this.state[name]} onChange = {this.onChangeInput} className = "form-control">
        <option></option>
        </select>
    )

    }

    chargeForm = () => {
        if(this.state.allGenres !== "" && this.state.allRatings !== ""){
            return(
                <form onSubmit = {this.handleSubmit}>
                    <div className = "form-group">

                    </div>
                    <div className = "form-group">
                        <label htmlFor = "genre">Genre:</label>
                        {this.createSelecter(this.state.allGenres, "genre")}
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "genre">Rating:</label>
                        {this.createSelecter(this.state.allRatings, "ratings")}
                    </div>
                </form>
            )
        }else{
            return <div></div>
        }
    }

    render(){
        return(
            <div>
                {this.chargeForm()}
            </div>
        )
    }
}

export default FormMovie;