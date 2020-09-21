import React, {Component} from 'react';
import {ReactComponent as ReactLogo} from '../images/padlock.svg';
import  {FormContainer, ConfirmButton, InputStyled, InputWrapperStyled, IconAndInfo, FormWrapper, IconWrapper, IconStyled, CheckboxStyled, Copyrights, MailingStyled, SignupRedirectA, SigninRedirectWrapper}  from "../styledComponents/styledComponents.js";
import './styles.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// то зайти у акк

export default class SignIn extends Component{
    
    state = {
        email: {
            value: '',
            isValid: false,
            validationRules: {
                regExp: /^([a-zA-Z0-9_\.\-]{3,})+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/
            }
        },
        password: {
            value: '',
            isValid: false,
            validationRules: {
                regExp: /(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8,}$/,
            }
        },
        rememberMe: false,
    } 

    showPersonalData = () => {
        console.log(this.state);
    }

    emailValidation = email => this.state.email.validationRules.regExp.test(String(email).toLowerCase());    

    passwordValidation = password => this.state.password.validationRules.regExp.test(String(password));

    forgotPasswordFn = () => alert(`Oh, it's sad. Send us your card number, password and cvv-code, and we will help you!`);

    remembermeFn = () => console.log(`Sure. You're unforgettable!`);

    render(){
        return (
            <FormWrapper>
                <FormContainer>
                    <IconAndInfo>
                        <IconWrapper>
                            <IconStyled>
                                <ReactLogo/>
                            </IconStyled>
                        </IconWrapper>
                        SIGN IN
                    </IconAndInfo>
                    <InputWrapperStyled>
                        <div>
                            <InputStyled
                                name="email"
                                type="text"
                                placeholder="Email Adress *"
                                isValid={this.state.email.isValid}
                                isEmpty={!this.state.email.value.length}
                                onInput = {
                                    event => this.setState({
                                        email: {
                                            ...this.state.email,
                                            value: event.target.value,
                                            isValid: this.emailValidation(event.target.value)
                                        }
                                    })
                                }
                            >
                            </InputStyled>   
                            {/* вилазить за межі */}
                        </div>
                        <div>
                            <InputStyled
                                type="password"
                                isValid={this.state.password.isValid}
                                isEmpty={!this.state.password.value.length}
                                placeholder="Password *"
                                onInput = {
                                    event => this.setState({
                                        password: {
                                            ...this.state.password,
                                            value: event.target.value,
                                            isValid: this.passwordValidation(event.target.value)
                                        }
                                    })
                                }
                            >
                            </InputStyled>
                        </div>
                    </InputWrapperStyled>
                    <MailingStyled>
                        <CheckboxStyled type="checkbox" onClick={this.remembermeFn}></CheckboxStyled>
                        Remember me
                    </MailingStyled>
                    <div className="signin-button">
                        <ConfirmButton onClick={this.showPersonalData.bind(this)}>SIGN IN</ConfirmButton>
                    </div>
                    <SigninRedirectWrapper>
                        <div className="SignupRedirectA-left">
                            <SignupRedirectA href="#" onClick={this.forgotPasswordFn}>Forgot password?</SignupRedirectA>
                        </div>
                        <div className="SignupRedirectA-right">
                            <SignupRedirectA href="/hw4#/signup">Don't have an account? Sign up</SignupRedirectA>
                        </div>
                    </SigninRedirectWrapper>
                    <Copyrights>
                        <div>Copyright © Your Website 2020.</div>
                    </Copyrights>
                </FormContainer>
                
            </FormWrapper>
            
        )
    }
}

