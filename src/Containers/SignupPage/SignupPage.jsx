import './SignupPage.scss';
import UnauthenticatedBase from "../Bases/UnauthenticatedBase/UnauthenticatedBase";
import OAuthSocialButtons from "../../Components/Buttons/OAuthSocialButtons/OAuthSocialButtons";
import OrDivider from "../../Components/Dividers/OrDivider/OrDivider";
import SignupForm from "../../Components/Forms/SignupForm/SignupForm";

const SignupPage = () => {
    return (
        <UnauthenticatedBase page={'signup'}>
            <main className={'signupPage__wrapper__main'}>
                <h4 className={'app_h4'}>
                    Create Account
                </h4>

                <OAuthSocialButtons />

                <OrDivider />

                <SignupForm />
            </main>
        </UnauthenticatedBase>
    );
};

export default SignupPage;