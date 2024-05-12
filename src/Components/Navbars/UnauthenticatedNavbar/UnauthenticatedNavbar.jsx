import './UnauthenticatedNavbar.scss';
import RoundedImage from "../../Images/RoundedImage/RoundedImage";
import ThemeToggleButton from "../../Buttons/ThemeToggleButton/ThemeToggleButton";
import PropTypes from "prop-types";
import {uiPath} from "../../../Constants/PathConstants";
import {useLocation, useNavigate} from "react-router-dom";

const UnauthenticatedNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <main className={"unauthenticatedNavbar__container__main"}>
            <nav className={'unauthenticatedNavbar__wrapper__nav'}>
                <div>
                    <RoundedImage
                        title={'Home'}
                        onClick={()=> navigate(uiPath.landing)}
                    />
                </div>

                <div className={"unauthenticatedNavbar__buttonsWrapper__div"}>
                    <div className={"unauthenticatedNavbar__authButtons__div"}>
                        {!location.pathname?.includes('login') && (
                            <button onClick={()=> navigate(uiPath.login)}>
                                Login
                            </button>
                        )}

                        {!location.pathname?.includes('signup') && (
                            <button onClick={()=> navigate(uiPath.signup)}>
                                Signup
                            </button>
                        )}
                    </div>

                    <ThemeToggleButton/>
                </div>
            </nav>
        </main>
    );
};

UnauthenticatedNavbar.propTypes = {
    page: PropTypes.string
}

export default UnauthenticatedNavbar;