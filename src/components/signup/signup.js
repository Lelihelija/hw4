import React, {Component} from 'react';
import {ReactComponent as ReactLogo} from '../images/padlock.svg';
import './styles.css';
import {FormContainer, ConfirmButton, InputStyled, InputWrapperStyled, IconAndInfo, FormWrapper, IconWrapper, IconStyled, MailingStyled, FirstAndLastName, CheckboxStyled, Copyrights, SignupRedirectA, RedirectWrapper} from "../styledComponents/styledComponents.js";
// import SignForms from '../../App.js'

// то реєстрація

export default class SignUp extends Component{
    state = {
        firstname: {
            value: '',
            validationRules: {
                regExp: /[а-яА-яa-zA-z]{2,}$/,
            }
        },
        lastname: {
            value: '',
            validationRules: {
                regExp: /[а-яА-яa-zA-z]{2,}$/,
            }
        },
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
        emailUpdates: false,
        confirmPassword: false,
    }
    
    showPersonalData = () => {
        console.log(this.state);
    }

    firstnameValidation = firstname => this.state.firstname.validationRules.regExp.test(String(firstname));
    
    lastnameValidation = lastname => this.state.lastname.validationRules.regExp.test(String(lastname));

    emailValidation = email => this.state.email.validationRules.regExp.test(String(email).toLowerCase());    

    passwordValidation = password => this.state.password.validationRules.regExp.test(String(password));
    
    sendmeinfoFn = () => console.log(`Ok! We're preparing tons of unnecessary info and we're getting ready to spam your email!`);

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
                        SIGN UP
                    </IconAndInfo>
                    <InputWrapperStyled>
                        <FirstAndLastName>
                            <div className="firstname-container">
                            <InputStyled
                                name="firstname"
                                type="text"
                                placeholder="First Name *"
                                isValid={this.state.firstname.isValid}
                                isEmpty={!this.state.firstname.value.length}
                                onInput = {
                                    event => this.setState({
                                        firstname: {
                                            ...this.state.firstname,
                                            value: event.target.value,
                                            isValid: this.firstnameValidation(event.target.value)
                                        }
                                    })
                                }
                            >
                            </InputStyled>
                            </div>
                            <div className="lastname-container">
                            <InputStyled
                                name="lastname"
                                type="text"
                                placeholder="Last Name *"
                                isValid={this.state.lastname.isValid}
                                isEmpty={!this.state.lastname.value.length}
                                onInput = {
                                    event => this.setState({
                                        lastname: {
                                            ...this.state.lastname,
                                            value: event.target.value,
                                            isValid: this.lastnameValidation(event.target.value)
                                        }
                                    })
                                }
                            >
                            </InputStyled>
                            </div>
                        </FirstAndLastName>
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
                        <CheckboxStyled type="checkbox" onClick={this.sendmeinfoFn}></CheckboxStyled> 
                        I want to receive inspiration, marketing <br/> promotions and updates via email.
                    </MailingStyled>
                    <div className="signup-button">
                        <ConfirmButton onClick={this.showPersonalData.bind(this)}>SIGN UP</ConfirmButton>
                    </div>
                    <RedirectWrapper>
                        <SignupRedirectA href="/HW4/signin">Already have an account? Sign in</SignupRedirectA>
                    </RedirectWrapper>
                    
                    <Copyrights>Copyright © Your Website 2020. </Copyrights>
                </FormContainer>
                
            </FormWrapper>
        )
    }
}

// href="/hw18_react_stylization/signin"
{/* <InputWrapperStyled>
<FirstAndLastName>
    <div className="firstname-container">
        <InputStyled type="text" value={firstname}  onChange={changeValue.bind(this, "firstname")} name="firstname" placeholder="First Name *"></InputStyled>
    </div>
    <div className="lastname-container">
        <InputStyled type="text" value={lastname} onChange={changeValue.bind(this, "lastname")} name="lastname" placeholder="Last Name *"></InputStyled>
    </div>
</FirstAndLastName>
<div>
    <InputStyled type="text" value={email} onChange={changeValue.bind(this, "email")} name="email" placeholder="Email Adress *"></InputStyled>
</div>
<div>
    <InputStyled type="password" value={password} onChange={changeValue.bind(this, "password")} placeholder="Password *"></InputStyled>
</div>
</InputWrapperStyled> */}

{/* <ConfirmBtn firstName="this.state.firstname" lastname="this.state.lastname" email="this.state.email" password="this.state.password" text="SIGN UP"/> */}