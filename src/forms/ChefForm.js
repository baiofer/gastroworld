import React from 'react'
import t from 'tcomb-form-native'
const Form = t.form.Form
import * as Texts from '../utils/Texts'

export const ChefForm = t.struct({
    first_name: t.String,
    last_name: t.String,
    avatar: t.maybe(t.String),
    email: t.String,
    phone: t.String,
    country: t.String,
})

export const options = {
    fields: {
        first_name: {
            label: Texts.firstName1,
            placeholder: Texts.firstName
        },
        last_name: {
            label: Texts.lastName1,
            placeholder: Texts.lastName
        },
        avatar: {
            label: Texts.avatar1,
            placeholder: Texts.avatar,
            autoCapitalize: 'none'
        },
        email: {
            label: Texts.email1,
            placeholder: Texts.email,
            autoCapitalize: 'none'
        },
        phone: {
            label: Texts.phone1,
            placeholder: Texts.phone,
            autoCapitalize: 'none'
        },
        country: {
            label: Texts.country1,
            placeholder: Texts.country
        }
    }
}