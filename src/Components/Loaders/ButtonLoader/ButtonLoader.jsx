import './ButtonLoader.scss';

const ButtonLoader = ({
    size = '1em',
    fontSize = 28
                      }) => {

    const buttonLoader = {
        width: size,
        height: size,
        fontSize: fontSize
    }
    return (
        <div style={buttonLoader} className="buttonLoader__spinner__div center">
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
            <div className="buttonLoader__spinnerBlade__div"></div>
        </div>
    );
};

export default ButtonLoader;