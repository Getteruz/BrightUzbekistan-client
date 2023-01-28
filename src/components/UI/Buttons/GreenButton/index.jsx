import cls from './GreenButton.module.scss'

const GreenButton = ({children, className = '', ...other}) => {
    return (
        <button className={`${cls.btn} ${className}`} {...other}>
            {children}
        </button>
    );
}

export default GreenButton;
