import './ThemeToggleButton.scss';
import {FaMoon, FaSun} from "react-icons/fa";
import {serviceConstants} from "../../../Constants/ServiceConstants";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../../State/ThemeSlice";
import {useLayoutEffect, useState} from "react";

const ThemeToggleButton = () => {

    const [isLightTheme, setIsLightTheme] = useState(true);
    const dispatch = useDispatch();
    const {theme} = useSelector((state) => state.theme);

    useLayoutEffect(()=> {
        if (theme === serviceConstants.lightTheme) {
            setIsLightTheme(true);
        } else {
            setIsLightTheme(false);
        }
    }, [isLightTheme, dispatch, theme])

    const handleOnChange = (event) => {
        if (event.target.checked) {
            localStorage.setItem(serviceConstants.themeKey, serviceConstants.lightTheme);
            document.documentElement.setAttribute(
                serviceConstants.dataTheme,
                serviceConstants.lightTheme
            );
            setIsLightTheme(true);
            dispatch(setTheme({
                isSelected: true,
                theme: serviceConstants.lightTheme
            }));
        } else {
            localStorage.setItem(serviceConstants.themeKey, serviceConstants.darkTheme);
            document.documentElement.setAttribute(
                serviceConstants.dataTheme,
                serviceConstants.darkTheme
            );
            setIsLightTheme(false);
            dispatch(setTheme({
                isSelected: true,
                theme: serviceConstants.darkTheme
            }));
        }
    }

    return (
        <div>
            <input type="checkbox" checked={isLightTheme} onChange={handleOnChange} className="themeToggleButton__wrapper__input" id="themeToggle"/>
            <label htmlFor="themeToggle" className={"themeToggleButton__labelWrapper__label"} >
                <FaMoon color={'#f1c40f'} />
                <FaSun color={'#f39c12'} />
                <span />
            </label>
        </div>
    );
};

export default ThemeToggleButton;