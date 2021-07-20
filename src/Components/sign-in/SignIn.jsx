import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './SignIn.scss'

export class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with email or Google</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email"
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required
                    />

                    <Button type="submit">Sign In</Button>
                </form>
                
            </div>
        )
    }
}

export default SignIn