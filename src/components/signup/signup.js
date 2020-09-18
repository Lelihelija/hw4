import React, {Component} from 'react';

// то реєстрація

export default class SignUp extends Component{
    state = {
        isActive: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        emailUpdates: false,

    }
    
    render(){
        return (

            <div className="signup-wrapper">
                <div className="signup-icon-info">Sign in</div>
                <div className="signup-inputs-rememberme">
                    <input placeholder="First Name *"></input>
                    <input placeholder="Last Name *"></input>
                    <input placeholder="Email Adress *"></input>
                    <input placeholder="Password *"></input>
                    <div><input type="checkbox"></input> I want to receive inspiration, marketing promotions and updates via email.</div>
                    
                </div>
                <div className="signup-button">
                    <button type="button">SIGN UP</button>
                </div>
                <div className="signup-redirects">
                    <button type="button">Already have an account? Sign in</button>
                </div>
                <div className="signup-copyrights">Copyright © Your Website 2020. </div>
            </div>
        )
    }
}