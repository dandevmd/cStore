import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../database/firebase.config.js'

import FormInput from '../form-input/FormInput.jsx'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button.jsx'

import { SignInContainer, ButtonsContainer } from './signin.styles'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const navigate = useNavigate()

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const onChange = (e) => {
        //const {id, value} = e.target    se poate si cu atributu name inloc de id
        setFormFields(prevState => (
            {
                ...prevState,
                // [id]: value
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
             await signInAuthUserWithEmailAndPassword(email, password)
             navigate('/shop')
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/user-not-found' && error.code === 'auth/wrong-password') alert('Wrong user credentials')

          
        
    }}

    // console.log(formFields)
    return (
        <SignInContainer>
            <h2>Do you have an account already?</h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={onSubmit}>

                <FormInput label={'Email Address'} onChange={onChange} name='email' value={email} type="email" required />

                <FormInput label={'Password'} onChange={onChange} name='password' value={password} type="password" required />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Sign In with Google</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn