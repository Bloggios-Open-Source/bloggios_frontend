import {useLayoutEffect} from 'react';
import {serviceConstants} from "../Constants/ServiceConstants";
import {useDispatch} from "react-redux";
import {setTheme} from "../State/ThemeSlice";

const useTheme = () => {

    const dispatch = useDispatch();

    useLayoutEffect(()=> {
        const theme = localStorage.getItem(serviceConstants.themeKey);
        if (theme) {
            if (theme === serviceConstants.lightTheme) {
                document.documentElement.setAttribute(
                    serviceConstants.dataTheme,
                    "light"
                );
            } else if (theme === serviceConstants.darkTheme) {
                document.documentElement.setAttribute(
                    serviceConstants.dataTheme,
                    "dark"
                );
            }
        } else {
            document.documentElement.setAttribute(
                serviceConstants.dataTheme,
                "dark"
            );
        }
        dispatch(setTheme({
            isSelected: false,
            theme: document.documentElement.getAttribute(serviceConstants.dataTheme)
        }));
    }, [dispatch]);
};

export default useTheme;