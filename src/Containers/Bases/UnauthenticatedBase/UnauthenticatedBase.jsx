import React from 'react';
import PropTypes from "prop-types";
import UnauthenticatedNavbar from "../../../Components/Navbars/UnauthenticatedNavbar/UnauthenticatedNavbar";

const UnauthenticatedBase = ({children}) => {
    return (
        <div>
            <UnauthenticatedNavbar />
            {children}
        </div>
    );
};

UnauthenticatedBase.propTypes = {
    children: PropTypes.node.isRequired
}

export default UnauthenticatedBase;