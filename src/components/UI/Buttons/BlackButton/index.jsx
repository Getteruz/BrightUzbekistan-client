import cls from './BlackButton.module.scss'

const BlackButton = ({label, ...other}) => {
    return (
        <button className={cls.btn} {...other}>
            {label}
        </button>
    );
}

export default BlackButton;
