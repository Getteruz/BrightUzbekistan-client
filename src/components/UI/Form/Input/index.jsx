import cls from './Input.module.scss'

const Input = ({
    placeholder = '',
    type = 'text',
    name = '',
    register = {},
    ...other
}) => {
    return (
        <input 
            className={cls.input}
            type={type}
            placeholder={placeholder} 
            name={name}
            {...register}
            {...other}
        />
    );
}

export default Input;
