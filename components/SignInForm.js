import react from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";



const SignInForm = (props) =>{

    return(

        <>
            <Input label="Email" icon="mail" />

            <Input label="Password" icon="lock" />  

            <SubmitButton

                title="Sign In"
                onPress={()=>console.log('Button Press')}
                disabled={true}
                style={{marginTop: 20}}

            /> 
        </>
    )
}

export default SignInForm;