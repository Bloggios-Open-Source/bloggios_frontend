import './LoginPage.scss';
import UnauthenticatedBase from "../Bases/UnauthenticatedBase/UnauthenticatedBase";
import OAuthSocialButtons from "../../Components/Buttons/OAuthSocialButtons/OAuthSocialButtons";
import OrDivider from "../../Components/Dividers/OrDivider/OrDivider";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <UnauthenticatedBase page={'login'}>
            <main className={'loginPage__wrapper__main'}>
                <h4 className={'app_h4'}>
                    Login
                </h4>

                <OAuthSocialButtons />

                <OrDivider />

                <LoginForm />
            </main>
        </UnauthenticatedBase>
    );
};

export default LoginPage;