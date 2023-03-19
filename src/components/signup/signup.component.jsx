import React, { useState } from 'react'
import { createUserDocumentFromAuth, createUserEmailPassword } from '../../utils/firebase.utils';
import ButtonComponent from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss'

const SignUpComponent = () => {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const resetFields =() => {
        setFormFields(defaultFormFields)
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('password not match!')
            return;
        }

        try {
            const response = await createUserEmailPassword(email, password);
            await createUserDocumentFromAuth(response.user, {displayName});
            resetFields();
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='sign-up-container'>
        <h1>Don't have an account?</h1>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Name' type="text" required name='displayName' value={displayName} onChange={handleChange}/>
            <FormInput label='Email' type="email" required name='email' value={email} onChange={handleChange}/>
            <FormInput label='Password' type="password" required name='password' value={password} onChange={handleChange}/>
            <FormInput label='Confirm Password' type="password" required name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
            <ButtonComponent buttonType='inverted' type='submit'>Sign Up</ButtonComponent>
        </form>
    </div>
  )
}

export default SignUpComponent