import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, Toast } from 'native-base'
import t from 'tcomb-form-native'
const Form = t.form.Form
import LoginValidation from '../utils/LoginValidation'
import BackgroundImage from '../components/BackgroundImage';
import * as Texts from '../utils/Texts'
import AppButton from '../components/AppButton';
import * as firebase from 'firebase'

export default class RegisterUser extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
        this.samePassword = t.refinement(t.String, (s) => {
            return s === this.state.user.password
        })
        this.user = t.struct({
            email: LoginValidation.email,
            password: LoginValidation.password,
            password_confirmation: this.samePassword
        })
        this.options = {
            fields: {
                email: {
                    help: Texts.emailHelp,
                    error: Texts.emailError,
                    autoCapitalize: 'none'
                },
                password: {
                    help: Texts.passwordHelp,
                    error: Texts.passwordError,
                    password: true,
                    secureTextEntry: true
                },
                password_confirmation: {
                    help: Texts.passwordConfirmationHelp,
                    error: Texts.passwordConfirmationError,
                    password: true,
                    secureTextEntry: true
                }
            }
        }
        this.validate = null
    }
    
    register() {
        console.log('entro en Register. ', this.validate)
        if (this.validate) {
            firebase.auth().createUserWithEmailAndPassword(
                this.validate.email, this.validate.password
            )
                .then( () => {
                    console.log(Texts.passwordOk)
                })
                .catch( (error) => {
                    console.log(error.message)
                })
        }
    }

    onChange(user) {
        this.setState({ user })
        this.validate = this.refs.form.getValue()
    }

    render() {
        return(
            <BackgroundImage source={ require('../../assets/images/login-bg.png')}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Card style={{ padding: 15 }} title={ Texts.register }>
                        <Form
                            ref='form'
                            type={ this.user }
                            options={ this.options }
                            value={ this.state.user }
                            onChange={ (v) => this.onChange(v) }
                        />
                        <AppButton
                            bgColor="rgba(200, 200, 50, 0.9)"
                            title={ Texts.register }
                            action={ this.register.bind(this) }
                            iconName="user-plus"
                            iconSize={ 30 }
                            iconColor="#fff"
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}