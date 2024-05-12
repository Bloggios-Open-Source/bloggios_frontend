import './OrDivider.scss';

const OrDivider = ({
    text = 'or'
                   }) => {
    return (
        <div className={'orDivider__wrapper__div'}>
            <div className={'orDivider__line__div'} />
                <span>{text}</span>
            <div className={'orDivider__line__div'} />
        </div>
    );
};

export default OrDivider;