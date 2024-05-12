import './BasicTextField.scss'
import useIsInputFocused from "../../../Hooks/useIsInputFocused";
import {IoClose} from "react-icons/io5";
import {useEffect} from "react";

const BasicTextField = ({
                            label,
                            placeholder,
                            type,
                            ariaInvalid,
                            onChange,
                            value,
                            inputMode,
                            handleClear,
                            helperText
                        }) => {

    useEffect(() => {
        if (type.toLowerCase() === 'password') {
            throw new Error("Basic Text Field is Generally made for Text Fields. Please use Password Field instead")
        } else if (!['email', 'text', 'tel', 'number'].includes(type.toLowerCase())) {
            throw new Error("Basic Text Field type is invalid. Basic field type can only contain 'email', 'text', 'tel', 'number'");
        }
    }, [type]);

    const [inputRef, isInputFocused] = useIsInputFocused();

    return (
        <div className={'basicTextField__mainWrapper__div'}>
            <label className={'basicTextField__fieldLabel__label'} htmlFor={label}>
                {label}
            </label>

            <div
                className={`basicTextField__textField__div ${isInputFocused ? 'basicTextField__focused__div' : ariaInvalid ? 'basicTextField__error__div' : ''}`}>
                <input
                    ref={inputRef}
                    type={type}
                    inputMode={inputMode}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {value?.length > 0 &&
                    <IoClose style={{cursor: 'pointer'}} onClick={handleClear}/>}
            </div>
            <label className={'basicTextField__errorLabel__label'} htmlFor={`basicTextField__errorLabel-${label}`}>
                {helperText}
            </label>
        </div>
    );
};

export default BasicTextField;