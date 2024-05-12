import {serviceConstants} from "../Constants/ServiceConstants";

export const passwordValidator = (password) => {
    if (!password || password.length === 0) {
        return 'Password must be at least 8 characters';
    } else if (password && !serviceConstants.passwordRegex.test(password)) {
        return 'The password must be a minimum of 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }
}