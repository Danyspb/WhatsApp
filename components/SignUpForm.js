import react from "react";
import Input from "../components/Input";
import SubmitButton from "./SubmitButton";
import { validateString } from "../utils/ValidationConstraints";

const SigneUpForm = (props) =>{

    const inputChangeHandler = (inputId, inputValue) =>{

        if(inputId === "firstName" || inputId === "lastName"){
           console.log(validateString(inputId, inputValue))
        }
        else if(inputId === "email"){

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