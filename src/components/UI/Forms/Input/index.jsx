import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    label = '',
    placeholder = '',
    ...other
}) => {
    return (
        <label className={cls.label}>
            {label && <span>{label}</span>}
            <input 
                className={cls.input}
                type={type}
                placeholder={placeholder}
                {...other}
            />
        </label>
    );
}

export default Input;
