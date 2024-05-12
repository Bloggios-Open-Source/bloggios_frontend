import './FilledButton.scss';
import ButtonLoader from "../../Loaders/ButtonLoader/ButtonLoader";

const FilledButton = ({
    label,
    onClick,
    width = '100%',
    height = 34,
    align = 'center',
    type,
    isLoading,
    margin
                      }) => {

    const buttonStyle = {
        width: width,
        height: height,
        alignSelf: align,
        margin: margin
    }

    return (
        <button
            style={buttonStyle}
            className={'filledButton__wrapper__button'}
            onClick={onClick}
            type={type}
        >
            {isLoading ? <ButtonLoader size={'10px'} fontSize={25} /> : label}
        </button>
    );
};

export default FilledButton;