import React, { Component } from 'react';
import singleUser from '../../services/singleUser';
import updateeUSer from '../../services/updateUser';

class EditProfile extends Component{

    state = {
        userData: "",
        name: "",
        lastName: "",
        email: "",
        phone: ""
    }

    componentDidMount(){
        singleUser(this.props.match.params.id).then((resp) => {
            this.setState({
                userData:resp.data.data.singleUser
            })
        })
    }

    chargeData(){
        if(this.state)
    }
}