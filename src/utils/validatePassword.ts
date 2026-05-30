    const validatePassword = ( password: string ) => {
        return {
            minLength: password.length >= 8,
            hasNumber: /\d/.test( password ),
            hasUpperCase: /[A-Z]/.test( password )
        };
    };
    export default validatePassword;