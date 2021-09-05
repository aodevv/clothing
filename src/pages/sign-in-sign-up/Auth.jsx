import React from 'react'
import './Auth.scss'
import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/signup/SignUp'

const Auth = () => {
    return (
        <div className="auth">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Auth
