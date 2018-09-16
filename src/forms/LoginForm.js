import React from 'react'
import t from 'tcomb-form-native'
import LoginValidation from '../utils/LoginValidation'
const Form = t.form.Form
import * as Texts from '../utils/Texts'

export const LoginForm = t.struct({
    email: LoginValidation.email,
    password: LoginValidation.password
})

export const options = {
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
        }
    }
}