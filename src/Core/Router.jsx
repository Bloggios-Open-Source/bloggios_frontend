import {Suspense} from "react";
import LoaderPage from "../Containers/LoaderPage/LoaderPage";
import {Route, Routes} from "react-router-dom";
import {uiPath} from "../Constants/PathConstants";
import LandingPage from "../Containers/LandingPage/LandingPage";
import LoginPage from "../Containers/LoginPage/LoginPage";
import SignupPage from "../Containers/SignupPage/SignupPage";

const Router = () => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                <Route path={uiPath.landing} element={<LandingPage />}/>
                <Route path={uiPath.login} element={<LoginPage />}/>
                <Route path={uiPath.signup} element={<SignupPage />}/>
            </Routes>
        </Suspense>
    )
}

export default Router;