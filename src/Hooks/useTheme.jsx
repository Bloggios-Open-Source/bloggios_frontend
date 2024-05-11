import {useLayoutEffect} from 'react';

const useTheme = () => {

    useLayoutEffect(()=> {
        document.documentElement.setAttribute(
            "data-theme",
            "light"
        )
    });
};

export default useTheme;