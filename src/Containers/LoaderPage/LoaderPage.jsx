import React from 'react';
import PageLoader from "../../Components/Loaders/BasicLoader/PageLoader";

const LoaderPage = () => {

    const loaderPage = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div style={loaderPage}>
            <PageLoader />
        </div>
    );
};

export default LoaderPage;