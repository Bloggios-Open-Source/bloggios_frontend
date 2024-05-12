import './PasswordField.scss';
import useIsInputFocused from "../../../Hooks/useIsInputFocused";
import {useCallback, useState} from "react";
import {MdVisibility, MdVisibilityOff} from "react-icons/md";

const PasswordField = ({
                           label,
                           placeholder,
                           ariaInvalid,
                           onChange,
                           value,
                           inputMode,
                           helperText
                       }) => {

    const [inputRef, isInputFocused] = useIsInputFocused();
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const getPasswordField = useCallback(() => {
        if (value?.length > 0) {
            if (!isPasswordShown) {
                return <MdVisibility onClick={() => setIsPasswordShown(!isPasswordShown)}/>
            } else {
                return <MdVisibilityOff onClick={() => setIsPasswordShown(!isPasswordShown)}/>
            }
        }
    }, [isPasswordShown, value?.length])

    return (
        <div className={'passwordField__mainWrapper__div'}>
            <label className={'passwordField__fieldLabel__label'} htmlFor={label}>
                {label}
            </label>

            <div
                className={`passwordField__textField__div ${isInputFocused ? 'passwordField__focused__div' : ariaInvalid ? 'passwordField__error__div' : ''}`}>
                <input
                    ref={inputRef}
                    type={isPasswordShown ? 'text' : 'password'}
                    inputMode={inputMode}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {getPasswordField()}
            </div>
            <label className={'passwordField__errorLabel__label'} htmlFor={`passwordField__errorLabel-${label}`}>
                {helperText}
            </label>
        </div>
    );
};
export default PasswordField;