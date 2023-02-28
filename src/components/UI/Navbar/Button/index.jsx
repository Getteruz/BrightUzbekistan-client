import cls from './Button.module.scss'

const Button = ({label, icon, ...other}) => {
    return (
        <button className={cls.btn} {...other}>
            {typeof icon === 'function' && icon()}
            {label}
        </button>
    );
}

export default Button;
