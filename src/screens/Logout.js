import React, { Component } from 'react'
import * as firebase from 'firebase'
import * as Texts from '../utils/Texts'
import { Toast } from 'native-base'

export default class Logout extends Component {

    componentDidMount () {
	    firebase.auth().signOut()
	        .then(() => {
                console.log(Texts.logout)
	        })
	        .catch(error => {
                console.log(error.message)
	        })
    }
    
    render() {
        return(
            null
        )
    }
}