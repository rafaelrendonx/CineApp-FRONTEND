import React, { Component } from 'react';
import allGenres from '../../services/allGenres';
import allRatings from '../../services/allRatings';
import addMovie from '../../services/addMovie';
import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';


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
        <select name={name} id = {name} value = {this.state[name]} 
                onChange = {this.onChangeInput} className = "form-control">
            <option value = "" selected>--------------</option>
            {options}
        </select>
        )
    }

    onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        this.setState({
            [name]:value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("HOLA")
        //  this.setState({
        //        year: parseInt(this.state.year)
        //})
        console.log(this.state)
        addMovie(this.state).then((resp) => {
            console.log(resp.data.data)
            if(resp.data.data.addMovie._id){
                console.log(resp.data.data.addMovie)
            }
        })
    }

    /*handleUploadSuccess = (filename) => {
        console.log(filename)
        Firebase.storage().ref('images').child(filename)
            .getDownloadURL().then((url) => {
                console.log(url)
                this.setState({image:url})
                console.log(this.state)
            })
    }*/

    chargeForm = () => {
        if(this.state.allGenres !== "" && this.state.allRatings !== ""){
            return(
                <form onSubmit = {this.handleSubmit}>
                    <div className = "form-group">
                        <label htmlFor = "name">Name:</label>
                        <input type = "text" value = "{this.state.name}" 
                               className = "form-control" name = "name" onChange = "{this.onChangeInput}"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "name">Synopsis:</label>
                        <textarea name = "name" id = "synopsis" cols = "30" rows = "10"  
                                  value = "{this.state.synopsis}"  onChange = "{this.onChangeInput}">
                        </textarea>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "url">URL:</label>
                        <input type = "text" value = "{this.state.url}" 
                               className = "form-control" name = "url" onChange = "{this.onChangeInput}"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "director">Director:</label>
                        <input type = "text" value = "{this.state.director}" 
                               className = "form-control" name = "director" onChange = "{this.onChangeInput}"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "year">Year:</label>
                        <input type = "number" value = "{this.state.year}" 
                               className = "form-control" name = "year" onChange = "{this.onChangeInput}"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "genre">Genre:</label>
                        {this.createSelecter(this.state.allGenres, "genre")}
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "genre">Rating:</label>
                        {this.createSelecter(this.state.allRatings, "rating")}
                    </div>
                    <button type = "submit" className = "btn btn-info">Save</button>
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