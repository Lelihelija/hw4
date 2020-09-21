
import styled from "styled-components";

const FormContainer = styled.div`
    width: 20%;
    min-width: fit-content;
    heigth: 100%;
`

const ConfirmButton = styled.button`
    color: black;
    background: deepskyblue;
    font-size: 20px;
    padding: 5px 20px;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;

`
const InputStyled = styled.input`
    padding: 15px 11px;
    background:  #282c34;
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
    outline: none !important;
    width: 100%;
    display: flex;
    border: ${(props) => (props.isValid ? "1px solid green" : (props.isEmpty ? "1px solid grey" : "1px solid red"))};
    border-radius: 5px;
`

const FirstAndLastName = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    width: 100%;
`

const MailingStyled = styled.div`
    display: flex;
    text-align: left;
`

const SignupRedirectA = styled.a`
    text-align: right;
    text-decoration: none;
    background-color: #282c34;
    border: none;
    outline: none;
    color: deepskyblue;
    cursor: pointer;
    padding: 0;
`

const SigninRedirectWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const RedirectWrapper = styled.div`
    text-align: right;
`

const CheckboxStyled = styled.input`
    margin-right: 20px;

`


const InputWrapperStyled = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
    margin-bottom: 20px;
    heigth: 100%;
    

`
const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
    background: pink;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
`

const IconAndInfo = styled.div`
    padding: 40px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    
`
const IconStyled = styled.div`
    heigth: 30px;
    width: 30px;
`
const FormWrapper = styled.div`
    padding-top: 12%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    heigth: 100%;

`
const Copyrights = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10%;
`

export {FormContainer, ConfirmButton, InputStyled, InputWrapperStyled, IconAndInfo, FormWrapper, IconWrapper, IconStyled, MailingStyled, FirstAndLastName, CheckboxStyled, Copyrights, SignupRedirectA, RedirectWrapper, SigninRedirectWrapper};
