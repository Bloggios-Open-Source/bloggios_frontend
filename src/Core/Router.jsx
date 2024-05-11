import {Suspense} from "react";
import LoaderPage from "../Containers/LoaderPage/LoaderPage";
import {Route, Routes} from "react-router-dom";
import {uiPath} from "../Constants/PathConstants";
import LandingPage from "../Containers/LandingPage/LandingPage";

const Router = () => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                <Route path={uiPath.landing} element={<LandingPage />}/>
            </Routes>
        </Suspense>
    )
}

export default Router;