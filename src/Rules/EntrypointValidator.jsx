import {serviceConstants} from "../Constants/ServiceConstants";

export const entrypointValidator = (entrypoint) => {
    if (!entrypoint || entrypoint.length === 0) {
        return 'Email or Username is mandatory. Please enter one of them'
    } else if (entrypoint?.length > 0) {
        if (entrypoint.includes('@') && !serviceConstants.emailRegex.test(entrypoint)) {
            return 'Looks like entered email is invalid'
        } else if (!entrypoint.includes('@') && entrypoint.length < 8) {
            return 'Looks like entered username is invalid'
        }
    }
}