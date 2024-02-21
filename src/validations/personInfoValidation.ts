import { FormFields, FormFieldsErrors } from "../App";

export default function personInfoValidation(formFields: FormFields) {
    const errors: Partial<FormFieldsErrors> = {}
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!formFields.name.length) {
        errors.name = "Field is required";
    }

    if (!formFields.email.match(emailRegex)) {
        errors.email = "Field is required";
    }

    if (!formFields.phone.match(phoneRegex)) {
        errors.phone = "Field is required";
    }

    return errors;
}