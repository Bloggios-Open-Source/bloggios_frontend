import Router from './Core/Router'
import useTheme from "./Hooks/useTheme";

const App = () => {

    useTheme();

    return <Router />
};

export default App;