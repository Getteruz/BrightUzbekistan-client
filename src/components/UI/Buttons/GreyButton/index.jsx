import cls from './GreyButton.module.scss'

const GreyButton = ({label, icon, ...other}) => {
    return (
        <button className={cls.btn} {...other}>
            {typeof icon === 'function' && icon()}
            {label}
        </button>
    );
}

export default GreyButton;
