import './SignupConfirmation.scss'

const SignupConfirmation = () => {
    return (
        <span className={'signupConfirmation__wrapper_span'}>
            By proceeding with signup, you acknowledge that you have read and agree to
            our <a href={'#'} title={'Go to Terms and Condition'}>Terms and Conditions</a> and <a href={'#'} title={'Go to Privacy Policy'}>Privacy Policy</a>, which
            govern your use of our service.
        </span>
    );
};

export default SignupConfirmation;