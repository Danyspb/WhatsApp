import react from "react";
import Input from "../components/Input";
import SubmitButton from "./SubmitButton";

const SigneUpForm = (props) =>{
    return(
        <>
            <Input label="First Name" icon="user"  />

            <Input label="Last Name" icon="user" />

            <Input label="Email" icon="mail" />

            <Input label="Password" icon="lock" />  

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