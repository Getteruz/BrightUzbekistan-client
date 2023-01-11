import { ClockIcon } from '../icons';
import cls from './NewsCard.module.scss'

const NewsCard = () => {
    return (
        <div className={cls.card}>
            <div className={cls.card__info}>
                <time className={cls.card__info__time}><ClockIcon /> 09:41</time>
                <h5 className={cls.card__info__category}>Экономика</h5>
            </div>
            <h3 className={cls.card__title}>Хотите преумножить свой капитал, тогда спешите!</h3>
        </div>
    );
}

export default NewsCard;
