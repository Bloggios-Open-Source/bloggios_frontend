import './SignupForm.scss';
import {useState} from "react";
import BasicTextField from "../../Fields/BasicTextField/BasicTextField";
import PasswordField from "../../Fields/PasswordField/PasswordField";
import FilledButton from "../../Buttons/FilledButton/FilledButton";
import SignupConfirmation from "../../Texts/SignupConfirmation/SignupConfirmation";
import {emailValidator} from "../../../Rules/EmailValidator";
import {passwordValidator} from "../../../Rules/PasswordValidator";

const SignupForm = () => {
    const [signupData, setSignupData] = useState({ email: '', password: '' });
    const [errorData, setErrorData] = useState({ email: '', password: '' });
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const handleInputChange = (event, property) => {
        const { value } = event.target;
        setSignupData(prevState => ({ ...prevState, [property]: value }));
        setErrorData(prevState => ({ ...prevState, [property]: '' }));
    };

    const handleInputClear = (property) => {
        setSignupData(prevState => ({ ...prevState, [property]: '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsButtonLoading(true);

        const { email, password } = signupData;
        const emailError = emailValidator(email);
        const passwordError = passwordValidator(password);

        if (emailError || passwordError) {
            setErrorData({ email: emailError, password: passwordError });
            setIsButtonLoading(false);
        } else {
            console.log(signupData); // Submit the form data
            setIsButtonLoading(false);
        }
    };

    return (
        <form className={'signupForm__mainForm__form'} onSubmit={handleSubmit}>
            <BasicTextField
                label={'Email'}
                placeholder={"Enter your email"}
                type={'text'}
                inputMode={'email'}
                value={signupData.email}
                ariaInvalid={!!errorData.email}
                onChange={(event)=> handleInputChange(event, 'email')}
                handleClear={()=> handleInputClear('email')}
                helperText={errorData.email}
            />
            <PasswordField
                label={'Password'}
                placeholder={'Enter your password'}
                inputMode={'text'}
                value={signupData.password}
                ariaInvalid={!!errorData.password}
                onChange={(event)=> handleInputChange(event, 'password')}
                helperText={errorData.password}
            />
            <FilledButton
                label={'Sign Up'}
                type={'submit'}
                isLoading={isButtonLoading}
                margin={'20px 0'}
            />
            <SignupConfirmation />
        </form>
    );
};

export default SignupForm;