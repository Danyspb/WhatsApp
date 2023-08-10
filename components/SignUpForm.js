import react from "react";
import Input from "../components/Input";
import SubmitButton from "./SubmitButton";
import { validate } from "validate.js";

const SigneUpForm = (props) =>{

    const inputChangeHandler = (inputId, inputValue) =>{

        if(inputId === "firstName" || inputId === "lastName"){

            const constraints = {
                presence: {allowEmpty: false},
            }
            if(inputValue !==""){
                constraints.format = {
                    pattern: '[a-z]+',
                    flags: 'i',
                    message : 'ce champs ne peut contenir que des lettres'
                }
            }

           console.log (validate({[inputId]: inputValue}, {[inputId]: constraints}))
            // validate({[inputId]: inputValue}, {[inputId]: {presence: {allowEmpty: false}}})
           
        }else if(inputId === "email"){

        }
        else if(inputId === "password"){
             
        }

    }

    return(
        <>
            <Input 
                id='firstName'
                label="First Name" 
                icon="user"  
                onInputChanged={inputChangeHandler}/>

            <Input 
                id="lastName"
                label="Last Name" 
                icon="user" 
                onInputChanged={inputChangeHandler}/>

            <Input
                id="email"
                label="Email" 
                icon="mail" 
                onInputChanged={inputChangeHandler}/>

            <Input 
                id="password"
                label="Password" 
                icon="lock" 
                onInputChanged={inputChangeHandler}/>  

            <SubmitButton 

                title="Sign Up"
                onPress={()=>console.log('Button Press')}
                disabled={true}
                style={{marginTop: 20}}

            /> 
     
            
        </>
    )
};

export default SigneUpForm;