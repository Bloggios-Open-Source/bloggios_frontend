import './PageLoader.scss'

const PageLoader = ({
    size = 50,
    thickness = 7,
                     }) => {

    const basicLoader = {
        width: size,
        height: size,
        borderWidth: thickness,
    }

    return (
        <span style={basicLoader} className={'pageLoader__loader__span'}></span>
    );
};

export default PageLoader;