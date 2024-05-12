import {serviceConstants} from "../Constants/ServiceConstants";

export const emailValidator = (email) => {
    if (!email || email === '') {
        return 'Email is mandatory. Please enter a valid email';
    } else if (email?.length > 0 && !serviceConstants.emailRegex.test(email)) {
        return 'Email is invalid. Please enter a valid email';
    }
}