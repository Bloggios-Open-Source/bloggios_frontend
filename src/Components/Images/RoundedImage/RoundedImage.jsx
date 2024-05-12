import './RoundedImage.scss'
import {bgAccentRounded, bgAccentRoundedOuter, notFoundSvg} from "../../../assets/svg";
import {useSelector} from "react-redux";
import {useMemo} from "react";

const RoundedImage = ({
    image,
    alt,
    size = 45,
    style,
    borderRadius,
    zoomOnHover = false,
    border,
    onClick,
    title
                      }) => {

    const {theme} = useSelector(state => state.theme);

    const handleError = (event) => {
        event.target.src = notFoundSvg
    }

    const getImage = useMemo(()=> {
        if (!image) {
            if (theme === 'light') {
                return bgAccentRoundedOuter;
            } else {
                return bgAccentRounded
            }
        } else {
            return image;
        }
    }, [theme, image]);

    const inlineStyle = {
        width: size,
        height: size,
        borderRadius: borderRadius,
        border: border,
        cursor: onClick ? 'pointer' : 'default',
    }

    const combinedStyle = {
        ...inlineStyle,
        ...style
    }

    return (
        <div
            title={title}
            onClick={onClick}
            style={combinedStyle}
            className={`roundedImage__wrapper_div ${zoomOnHover ? 'zoom-hover' : ''}`}
        >
            <img
                src={getImage}
                alt={alt}
                onError={handleError}
            />
        </div>
    );
};

export default RoundedImage;