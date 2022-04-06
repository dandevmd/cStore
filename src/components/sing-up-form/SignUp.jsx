import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../database/firebase.config.js'

import FormInput from '../form-input/FormInput.jsx'
import Button from '../button/Button.jsx'

import { SignUpContainer} from './signup.styles'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields


    const onSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password)
            const user = userCredential.user

            await createUserDocumentFromAuth(user, { displayName })
            setFormFields(defaultFormFields)

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log('error>>', error)
            }
        }
    }

    const onChange = (e) => {
        //const {id, value} = e.target    se poate si cu atributu id inloc de name
        setFormFields(prevState => (
            {
                ...prevState,
                // [id]: value
                [e.target.name]: e.target.value
            }
        ))
    }

    // console.log(formFields)
    return (
        <SignUpContainer>
            <h2>Dont have an account?</h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={onSubmit}>
                <FormInput label={'Display Name'} onChange={onChange} name='displayName' value={displayName} type="text" required />

                <FormInput label={'Email Address'} onChange={onChange} name='email' value={email} type="email" required />

                <FormInput label={'Password'} onChange={onChange} name='password' value={password} type="password" required />

                <FormInput label={'Confirm Password'} onChange={onChange} name='confirmPassword' value={confirmPassword} type="password" required />

                <Button type="submit">Register</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUp