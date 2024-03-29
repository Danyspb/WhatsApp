import { validate } from "validate.js";

export const validateString = (id, value)=>{

    const constraints = {
        presence: {allowEmpty: false},
    };
    if(value !==""){
        constraints.format = {
            pattern: '[a-z]+',
            flags: 'i',
            message : 'ce champs ne peut contenir que des lettres'
        }
    }

    const validationResult = validate({[id]: value}, {[id]: constraints})
    return validationResult && validationResult[id];
    return validate({[id]: value}, {[id]: constraints})

    
}