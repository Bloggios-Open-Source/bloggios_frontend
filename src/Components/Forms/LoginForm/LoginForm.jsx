import './LoginForm.scss';
import {useState} from 'react';
import {emailValidator} from "../../../Rules/EmailValidator";
import {passwordValidator} from "../../../Rules/PasswordValidator";
import BasicTextField from "../../Fields/BasicTextField/BasicTextField";
import PasswordField from "../../Fields/PasswordField/PasswordField";
import FilledButton from "../../Buttons/FilledButton/FilledButton";
import SignupConfirmation from "../../Texts/SignupConfirmation/SignupConfirmation";
import {entrypointValidator} from "../../../Rules/EntrypointValidator";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ entrypoint: '', password: '' });
    const [errorData, setErrorData] = useState({ entrypoint: '', password: '' });
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const handleInputChange = (event, property) => {
        const { value } = event.target;
        setLoginData(prevState => ({ ...prevState, [property]: value }));
        setErrorData(prevState => ({ ...prevState, [property]: '' }));
    };

    const handleInputClear = (property) => {
        setLoginData(prevState => ({ ...prevState, [property]: '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsButtonLoading(true);

        const { entrypoint, password } = loginData;
        const entrypointError = entrypointValidator(entrypoint);
        const passwordError = passwordValidator(password);

        if (entrypointError || passwordError) {
            setErrorData({ entrypoint: entrypointError, password: passwordError });
            setIsButtonLoading(false);
        } else {
            console.log(loginData); // Submit the form data
            setIsButtonLoading(false);
        }
    };

    return (
        <form className={'loginForm__mainForm__form'} onSubmit={handleSubmit}>
            <BasicTextField
                label={'Email or Username'}
                placeholder={"Enter your email or username"}
                type={'text'}
                inputMode={'text'}
                value={loginData.entrypoint}
                ariaInvalid={!!errorData.entrypoint}
                onChange={(event)=> handleInputChange(event, 'entrypoint')}
                handleClear={()=> handleInputClear('entrypoint')}
                helperText={errorData.entrypoint}
            />
            <PasswordField
                label={'Password'}
                placeholder={'Enter your password'}
                inputMode={'text'}
                value={loginData.password}
                ariaInvalid={!!errorData.password}
                onChange={(event)=> handleInputChange(event, 'password')}
                helperText={errorData.password}
            />
            <FilledButton
                label={'Login'}
                type={'submit'}
                isLoading={isButtonLoading}
                margin={'20px 0'}
            />
        </form>
    );
};

export default LoginForm;