import React, { Component } from 'react'
import { View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from '../components/AppButton'
import t from 'tcomb-form-native'
const Form = t.form.Form
import { options, LoginForm } from '../forms/LoginForm'
import { Card, Toast } from 'native-base'
import * as firebase from 'firebase'
import * as Texts from '../utils/Texts'

export default class Login extends Component {

    login() {
        const validate = this.refs.form.getValue()
        if (validate) {
            firebase.auth().signInWithEmailAndPassword(validate.email, validate.password)
                .then( () => {
                    console.log(Texts.passwordOk)
                })
                .catch( (error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    if (errorCode === 'auth/wrong-password') {
                        console.log(Texts.wrongPassword)
                    } else {
                        console.log (errorMessage)
                    }
                })
        }
    }

    render() {
        return(
            <BackgroundImage source={ require('../../assets/images/login-bg.png')}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Card style={{ padding: 15 }} title={ Texts.init }>
                        <Form
                            ref='form'
                            type={ LoginForm }
                            options={ options }
                        />
                        <AppButton
                            bgColor="rgba(111, 38, 74, 0.7)"
                            title={ Texts.register }
                            action={ this.login.bind(this) }
                            iconName="sign-in"
                            iconSize={ 30 }
                            iconColor="#fff"
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}