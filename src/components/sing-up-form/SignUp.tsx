import { useState,ChangeEvent,FormEvent } from 'react'
import { AuthErrorCodes, AuthError } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../redux/actions/user/userActionCreator'

import FormInput from '../form-input/FormInput.js'
import Button from '../button/Button.js'

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
    const dispatch= useDispatch()


    const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            dispatch(signUpStart(email, password, displayName))
            setFormFields(defaultFormFields)

        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Email already in use')
            } else {
                console.log('error>>', error)
            }
        }
    }

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
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