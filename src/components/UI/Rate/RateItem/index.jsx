import cls from './RateItem.module.scss'

const RateItem = ({currency = '', value = '', differens = '', up = false}) => {
    return (
        <li className={cls.item}>
            <span className={cls.item__currency}>
                {`${currency} = ${value}`}
            </span>
            <span className={`${cls.item__diff} ${up ? cls.up : cls.down}`}>
                {parseFloat(differens) > 0 ? `+${differens}` : differens}
            </span>
        </li>
    );
}

export default RateItem;
