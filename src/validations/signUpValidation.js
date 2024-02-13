import React from 'react';

const signUpValidation = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

	if(!values.password) {
		errors.password = 'Required';
	}

	if(!values.repeatPassword){
		errors.repeatPassword = 'Required';
	}

	if(values.password !== values.repeatPassword) {
		errors.repeatPassword = 'The passwords do not match.';
	}

	return errors;
};

export default signUpValidation;
