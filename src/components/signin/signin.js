import React, {Component} from 'react';

// то зайти у акк

export default class SignIn extends Component{
    state = {
        isActive: false,
        email: '',
        password: '',
        rememberMe: false,
    }

    render(){
        return (
            <div className="signin-wrapper">
                <div className="signin-icon-info">Sign in</div>
                <div className="signin-inputs-rememberme">
                    <input placeholder="Email Adress *"></input>
                    <input placeholder="Password *"></input>
                    <div><input type="checkbox"></input> Remember me</div>
                    
                </div>
                <div className="signin-button">
                    <button type="button">SIGN IN</button>
                </div>
                <div className="signin-redirects">
                    <button type="button">Forgot password?</button>
                    <button type="button">Don't have an account? Sign up</button>
                </div>
                <div className="signin-copyrights">Copyright © Your Website 2020. </div>
            </div>
            
        )
    }
}

// <textarea className="comment-input"
            //           value={this.state.value}
            //           onChange={this.changeValue}
            //           onBlur={this.onBlur}
            // />