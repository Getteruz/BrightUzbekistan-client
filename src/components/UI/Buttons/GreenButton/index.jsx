import cls from './GreenButton.module.scss'

const GreenButton = ({
    children, 
    className = '', 
    type = 'button',
    ...other
}) => {
    return (
        <button className={`${cls.btn} ${className}`} type={type} {...other}>
            {children}
        </button>
    );
}

export default GreenButton;
